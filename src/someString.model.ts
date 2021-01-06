import * as mongoose from 'mongoose';

export interface SomeString extends mongoose.Document {
  data : string;
}

export const SomeStringSchema = new mongoose.Schema({
  data:{type: String}
})
