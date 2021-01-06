import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SomeString } from './someString.model'

var latestId = ""

@Injectable()
export class AppService {
  constructor(
    @InjectModel('SomeString')
    private readonly someStringModel: Model<SomeString> ){}

  async getHello() {
    const greet = await this.someStringModel.findOne({_id :latestId}).exec()
    return greet.data;
  }
   
  async setHello(data: SomeString) {
    const newGreet = new this.someStringModel({
      data
    })

    let saved = await newGreet.save();
    latestId = saved._id

    return saved.data;
  }
}
