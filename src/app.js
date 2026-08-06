import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views/"));

app.use(express.static(path.join(__dirname, "public/")));

app.get("/checkers", (_req, res) => {
  res.render("checkers");
});

app.get("/:key", (req, res) => {
  // console.log(req.params.key)
  process.stdout.write(req.params.key)
  return res.sendStatus(400)
})

export default app;
