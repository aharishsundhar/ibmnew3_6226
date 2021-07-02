import * as mongoose from 'mongoose';
import cloudModel from '../models/cloud';
import { CustomLogger } from '../config/Logger'


export class cloudDao {
    private cloud = cloudModel;
    constructor() { }
public GpCreate(cloudData, callback){
new CustomLogger().showLogger('info', 'Enter into cloudDao.ts: GpCreate')
let temp = new cloudModel(cloudData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from cloudDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}