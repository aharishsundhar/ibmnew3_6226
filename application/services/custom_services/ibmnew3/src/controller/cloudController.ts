import { Request, Response } from 'express';
import { cloudService } from '../service/cloudService';
import { CustomLogger } from '../config/Logger'
let cloud = new cloudService();

export class cloudController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
cloud.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into cloudController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from cloudController.ts: GpCreate');
    })}


}