import express from "express"
import { Router } from "express"
const app = express()
const router = Router()
const port = 4032;
app.use(express.json());
router.post("/", (rec,res)=>{
    res.json({message:"Opa tudo bom?"})

})
app.use(router);
app.listen(port, () => {
    console.log(`Servidor rodando na port ${port}`)
});