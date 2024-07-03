window.onload = () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", gameSetup.startGame);

  const newGame = document.getElementById("newGame");
  newGame.addEventListener("click", gameSetup.restart);
};

/*Game setup */

function play(e) {
  const id = e.target.id;
  const div = e.target;

  const i = gameboard.findField(id);

  if (i !== -1) {
    game.newField(div, i);
    if (gameplay.getTurn() >= 4 && gameplay.isWinning()) {
      game.win();
    } else if (gameplay.getTurn() === 8) {
      game.draw();
    } else {
      game.nextTurn();
    }
  } else {
    game.alreadyPlayed();
  }
}

const gameSetup = (() => {
  const form = document.getElementById("form");

  const form_error = document.getElementById("form_error");

  const player1 = document.getElementById("player1");
  const player1_symbol = document.getElementById("player1_sym");

  const player2 = document.getElementById("player2");
  const player2_symbol = document.getElementById("player2_sym");

  const startGame = (e) => {
    e.preventDefault();

    const values = Array.from(form.getElementsByTagName("input")).map((x) => {
      return x.value !== "" ? x.value : x.placeholder;
    });

    if (values[0] === values[2] && values[1] === values[3]) {
      form_error.innerHTML =
        "Names and Symbols can't be the same! Change at least one of each!";
      return;
    } else if (values[0] === values[2]) {
      form_error.innerHTML = "Names can't be the same! Change at least one!";
      return;
    } else if (values[1] === values[3]) {
      form_error.innerHTML = "Symbols can't be the same! Change at least one!";
      return;
    } else {
      form_error.innerHTML = "";
    }

    players.setPlayer(values);

    gameboard.addLister();
    gameboard.turnInner(`<em>${players.getName()}</em> 's turn`);

    player1.innerHTML = players.getNames()[0];
    player1_symbol.innerHTML = players.getSymbols()[0];
    player1_score.innerHTML = gameplay.getScore().player1;

    player2.innerHTML = players.getNames()[1];
    player2_symbol.innerHTML = players.getSymbols()[1];
    player2_score.innerHTML = gameplay.getScore().player2;

    form.classList.add("hidden");
  };

  const restart = () => {
    form.classList.remove("hidden");

    gameplay.clearScore();
    gameplay.clearTurn();
    gameplay.clearWinner();

    gameboard.clearFields();
  };

  const nextRound = () => {
    gameboard.hideButton();

    gameboard.addLister();

    gameplay.clearTurn();
    gameplay.clearWinner();
    gameboard.turnInner(`<em>${players.getName()}</em> 's turn`);
    gameboard.clearFields();
  };

  return { startGame, nextRound, restart };
})();

/*Players Settings*/

const players = (() => {
  const makePlayer = (name, symbol) => {
    return { name: name, symbol: symbol };
  };

  let player1 = {};
  let player2 = {};

  const setPlayer = (values) => {
    player1 = { ...makePlayer(values[0], values[1]) };
    player2 = { ...makePlayer(values[2], values[3]) };
  };

  const getPlayer = () => {
    return gameplay.getTurn() % 2 === 0 ? player1 : player2;
  };

  const getSymbols = () => [player1.symbol, player2.symbol];

  const getSymbol = () => {
    return gameplay.getTurn() % 2 === 0 ? player1.symbol : player2.symbol;
  };

  const getNames = () => [player1.name, player2.name];

  const getName = () => {
    return gameplay.getTurn() % 2 === 0 ? player1.name : player2.name;
  };

  return { setPlayer, getSymbol, getPlayer, getName, getNames, getSymbols };
})();

/*Gameboard settings */

const gameboard = (() => {
  const gamefield = document.getElementById("gameboard");

  const addLister = () => {
    gamefield.addEventListener("click", play);
    gamefield.classList.remove("played");
  };

  const removeLister = () => {
    gamefield.removeEventListener("click", play);
    gamefield.classList.add("played");
  };

  /* */
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", gameSetup.nextRound);

  const hideButton = () => nextButton.classList.add("hidden");
  const showButton = () => nextButton.classList.remove("hidden");

  /*----Field*/
  let fields = Array.from(gamefield.children).map((div) => div.id);

  const getFields = () => fields;
  const findField = (id) => fields.findIndex((div) => id === div);
  const setField = (i) => (fields[i] = players.getPlayer());
  const clearFields = () => {
    fields = Array.from(gamefield.children).map((div) => {
      div.innerHTML = "";
      div.classList.remove("played");
      return div.id;
    });
  };

  /*----Winning Condition */
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const conditions = () => winCondition;

  /* */
  const turn = document.getElementById("turn");
  const turnInner = (text) => {
    turn.innerHTML = text;
  };

  return {
    removeLister,
    addLister,
    getFields,
    setField,
    clearFields,
    conditions,
    turnInner,
    findField,
    hideButton,
    showButton,
  };
})();

/*Gameplay */

const gameplay = (() => {
  /*  */
  let turn = 0;

  const getTurn = () => turn;
  const nextTurn = () => turn++;
  const clearTurn = () => (turn = 0);
  /* */

  let score = { player1: 0, player2: 0 };

  const player1_score = document.getElementById("player1_score");
  const player2_score = document.getElementById("player2_score");

  const getScore = () => score;
  const setScore = () => {
    if (turn % 2 === 0) {
      score.player1++;
      player1_score.innerHTML = score.player1;
    } else {
      score.player2++;
      player2_score.innerHTML = score.player2;
    }
  };

  const clearScore = () => {
    score = { player1: 0, player2: 0 };
  };

  /*
   */

  let lastWinner = "";
  const setWinner = () => (lastWinner = players.getPlayer());
  const getWinner = () => lastWinner;
  const clearWinner = () => "";

  const isWinning = () => {
    const arr = gameboard.getFields().reduce((acc, cur, i) => {
      if (cur.symbol === players.getSymbol()) acc.push(i);
      return acc;
    }, []);

    for (let i = 0; i < gameboard.conditions().length; i++) {
      let intersection = gameboard.conditions()[i].filter((x) => arr.includes(x));

      if (
        intersection.length === 3 &&
        intersection.every((x, y) => x === gameboard.conditions()[i][y])
      ) {
        return true;
      }
    }
  };

  /**/

  return {
    getScore,
    setScore,
    nextTurn,
    clearTurn,
    setWinner,
    getWinner,
    play,
    getTurn,
    isWinning,
    clearWinner,
    clearScore,
  };
})();

const game = (() => {
  const newField = (div, i) => {
    gameboard.setField(i);
    div.innerHTML = players.getSymbol();
    div.classList.add("played");
  };

  const win = () => {
    gameplay.setWinner();

    gameplay.setScore();

    gameboard.turnInner(`<em>${gameplay.getWinner().name}</em> wins!! `);

    gameboard.removeLister();
    gameboard.showButton();
  };

  const draw = () => {
    gameboard.turnInner(`It's a draw!`);
    gameboard.removeLister();
    gameboard.showButton();
  };

  const nextTurn = () => {
    gameplay.nextTurn();
    gameboard.turnInner(`<em>${players.getName()}</em> 's turn`);
  };

  const alreadyPlayed = () => {
    console.log("try again");
  };

  return { newField, win, draw, nextTurn, alreadyPlayed };
})();
