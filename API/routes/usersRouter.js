import express from "express";
import User from "../models/user.js";

const router = express.Router();


// Método GET (consulta)

// Consultar todos os usuários (método GET)
router.get("/todosOsUsers", async(req, res)=>{

    try{

        const users = await User.find();

        return res.status(200).json(users)        
    }
    catch{
        return res.status(400).json({message:'Não foi possivel encontrar uma lista de usuários' })
    }
})

//Consultar um usuário unico pelo ID (método GET)

router.get("/todosOsUsers/:id", async(req, res)=>{

    const id = req.params.id
    
        try{

            const user = await User.findOne({_id:id});

            return res.status(200).json(user)

        } 
        catch {
            return res.status(400).json({message:"O usuário não foi encontrado!" })
        }
    })

    //Editar usuário (Método PATCH para atualização parcial)

router.patch("/todosOsUsers/:id", async(req, res)=>{

    const id = req.params.id;

    const {name, email, password} = req.body;

    const user = {
        name,
        email,
        password
    }

    try {

        const editUser = await User.updateOne({_id:id}, user);

        return res.status(200).json(user)
    }
    catch{
        return res.status(400).json({message:"Não foi possivel atualizar usuário!, verifique se o usuário existe"})
    }

})

    //Deletar usuário (método DELETE)

router.delete("/todosOsUsers/:id", async(req, res)=>{

    const id = req.params.id;

    try{

        await User.deleteOne({_id:id});

        return res.status(200).json({message:"Usuário removido com sucesso!"})

    } 
    catch {
        return res.status(400).json({message:"O usuário não foi encontrado!" })
    }

})

export default router;