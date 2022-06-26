import express from "express";
import Cursos from "../models/cursos.js";

const router = express.Router();

router.post("/todosOsCursos", async (req, res)=>{
    
    const {nomeCurso, cargaHoraria} = req.body;

    const curso = {
        nomeCurso,
        cargaHoraria
    }
    try{
        await Cursos.create(curso);
        return res.status(200).json({message: "Curso cadastrado com sucesso!"})
    }
    catch{
        return res.status(400).json({message:"Não foi possivel cadastrar curso!, verifique se o curso já existe"})
    }

})

// Método GET (consulta)

// Consultar todos os cursos (método GET)
router.get("/todosOscursos", async(req, res)=>{

    try{

        const cursos = await Cursos.find();

        return res.status(200).json(cursos)        
    }
    catch{
        return res.status(400).json({message:"Não foi possivel encontrar uma lista de cursos" })
    }
})

//Consultar um curso unico pelo ID (método GET)

router.get("/todosOscursos/:id", async(req, res)=>{

    const id = req.params.id
    
        try{

            const curso = await Cursos.findOne({_id:id});

            return res.status(200).json(curso)

        } 
        catch {
            return res.status(400).json({message:"O curso não foi encontrado!" })
        }
    })

    //Editar curso (Método PATCH para atualização parcial)

    router.patch("/todosOscursos/:id", async(req, res)=>{

        const id = req.params.id;

        const {nomeCurso, cargaHoraria} = req.body;

        const curso = {
            nomeCurso,
            cargaHoraria
        }

        try {

            const editcurso = await Cursos.updateOne({_id:id}, curso);

            return res.status(200).json(curso)
        }
        catch{
            return res.status(400).json({message:"Não foi possivel atualizar o curso!, verifique se o curso existe"})
        }

    })

    //Deletar curso (método DELETE)

    router.delete("/todosOscursos/:id", async(req, res)=>{

        const id = req.params.id;

        try{

            await Cursos.deleteOne({_id:id});

            return res.status(200).json({message:"Curso removido com sucesso!"})

        } 
        catch {
            return res.status(400).json({message:"O curso não foi encontrado!" })
        }

    })
    
export default router;