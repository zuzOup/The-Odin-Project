function Modal({ variant, setModal }: { variant: string | true; setModal: () => void }) {
  return (
    <div id="modal">
      <div>
        <p>{variant === "looser" ? "Oh no, you lost!" : "Congratulations! You win!"}</p>
        <button onClick={setModal}>New Game</button>
      </div>
    </div>
  );
}

export default Modal;
