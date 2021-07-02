
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const cloudSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const cloudModel = mongoose.model('cloud', cloudSchema, 'cloud');
export default cloudModel;
