import express from "express";
import cors from "cors"
import database from "./config/database.js";
import authRouter from  "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import cursosRouter from "./routes/cursosRouter.js";
import dotenv from "dotenv-safe";

dotenv.config();


database.on("open", () => console.log("Conexão realizada com sucesso!"));
database.on("error", () => console.log("Ops! Houve um erro!"))


const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/cursos", cursosRouter);
app.use;


app.get("/", (req, res) =>{
  res.json({message: "rota ok"});
})

 
export default app;