import express, {Request,Response} from "express"
import cors from 'cors'
import { users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//Exercicio 1
//app.get("/" , (req:Request , res:Response) =>{          
    
  
//res.status(200).send("Hello from Express")
//})

//Exercico4

//app.get("/name" , (req:Request , res:Response) =>{          
    
//const name = pessoas.map((pessoa)=>{
  //   return pessoa.name
//})

//res.status(200).send(name)
//})

app.get("/name" , (req:Request , res:Response) =>{          
    
    const name = pessoas.map((pessoa)=>{
         return pessoa.name
    })
    
    res.status(200).send(name)
    })


app.listen('3003', () => {
    console.log("Server is running in http://localhost:3003");
});