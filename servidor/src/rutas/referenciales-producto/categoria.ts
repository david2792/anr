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
       this.router.put('/estado',votocontrol.CambiarEstado);
      
   }
}

const categoriaRutas = new CategoriaRutas();
 export default categoriaRutas.router;