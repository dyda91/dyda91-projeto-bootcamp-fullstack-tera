import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema(
    {
        "nomeCurso": {
            type: String,
            required: true,
            unique: true
        },
        "cargaHoraria": {
            type: String,
            required: true,
        },
        "descricao": {
            type: String,
            required: true,
        }
        
    }
)



const Cursos = mongoose.model('cursos', cursosSchema);
export default Cursos; 