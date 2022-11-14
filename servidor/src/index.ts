import express,{Application} from "express";
import morgan, { token } from 'morgan';
import cors from 'cors';
//rutas
import indexRutas from './rutas/indexRutas'

import usuarioRutas from './rutas/ruta-acceso/ruta-acceso';
// productos referenciales
import categoriaRutas from './rutas/referenciales-producto/categoria'
import marcaRutas from './rutas/referenciales-producto/marcas'
import medidaRutas from './rutas/referenciales-producto/unidad_medida'
import impuestoRutas from './rutas/referenciales-producto/impuesto'
import productosRutas from './rutas/referenciales-producto/productos'
import depositoRutas from './rutas/referenciales-producto/depositos'


class Server
{
   public  app: Application;
    constructor()
    {
       this.app= express();
       this.config();
       this.router();
    }
    config():void
    {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    router():void
    {
        this.app.use(indexRutas);
        // ruta de acceso
        this.app.use('/api/usuario',usuarioRutas)

        this.app.use('/api/votante',categoriaRutas);
        this.app.use('/api/marca',marcaRutas);
        this.app.use('/api/medida',medidaRutas);
        this.app.use('/api/impuesto',impuestoRutas);
        this.app.use('/api/producto',productosRutas);
        this.app.use('/api/deposito',depositoRutas);

        
        
    }
    start():void
    {
        this.app.listen(this.app.get('port'), ()=>
        {
            console.log('servidor en 3000',this.app.get('port'));
            
        });
    }
}
const server = new Server();
server.start();