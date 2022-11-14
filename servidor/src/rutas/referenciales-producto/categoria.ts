import { Router } from 'express';
import { votocontrol } from '../../controlador/referenciales-personas/pacientes_control';

class CategoriaRutas
{
   public router: Router = Router(); 

   constructor()
   {
        this.config();
   }
   config():void
   {
       this.router.post('/listar',votocontrol.listarUno);
      
   }
}

const categoriaRutas = new CategoriaRutas();
 export default categoriaRutas.router;