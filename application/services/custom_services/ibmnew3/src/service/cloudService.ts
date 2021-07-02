import { Request, Response } from 'express';
import {cloudDao} from '../dao/cloudDao';
import { CustomLogger } from '../config/Logger'
let cloud = new cloudDao();

export class cloudService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into cloudService.ts: GpCreate')
     const  cloudData = req.body;
     cloud.GpCreate(cloudData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from cloudService.ts: GpCreate')
         callback(response);
         });
    }


}