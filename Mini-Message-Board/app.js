const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages })
);

app.get("/new", (req, res) =>
  res.render("form", { title: "Mini Message Board - Add New Msg" })
);

app.get("/details/:id", (req, res) => {
  if (req.params.id >= messages.length) {
    res.render("error", { title: "Error" });
  }

  res.render("details", {
    title: "Mini Message Board - Message details",
    message: messages[req.params.id],
  });
});

app.get("/*", (req, res) => res.render("error", { title: "Error" }));

app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Hello! - listening on port ${PORT}!`);
});
