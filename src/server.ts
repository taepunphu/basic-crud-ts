import express, { Request, Response } from "express";
import db from "./config/database.config";

db.authenticate();

db.sync().then(() => {
    console.log('connect to db')
});

const app = express();
const port = 9000;

app.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

app.listen(port, () => {
    console.log('server is running on port : ' + port);
});