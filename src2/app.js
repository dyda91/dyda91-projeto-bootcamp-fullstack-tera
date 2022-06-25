import express from "express"
import database from "./config/database.js"
import authRouter from  "./routes/authRouter.js"
import dotenv from "dotenv-safe"

dotenv.config()


database.on("open", () => console.log("Conexão realizada com sucesso!"))
database.on("error", () => console.log("Ops! Houve um erro!"))


const app = express();
app.use(express.json())
app.use("/auth", authRouter)
 
export default app;