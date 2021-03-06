import { Route } from 'core/interface';
import express, { Router } from 'express'

class App{
    public app: express.Application;
    public port: string | number;
    
     constructor(routes: Route[]){
         this.app = express();
         this.port = process.env.PORT || 5000;

         this.initialzeRoutes(routes);
     }

     private initialzeRoutes(routes: Route[]){
         routes.forEach((route)=>{
            this.app.use('/', route.router);
         });
     }


    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}

export default App;