import { Request, Response, NextFunction } from "express";
import { cloudController } from '../controller/cloudController';


export class Routes {
    private cloud: cloudController = new cloudController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/cloud').post(this.cloud.GpCreate);
     }

}