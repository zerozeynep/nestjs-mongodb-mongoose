import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SomeStringSchema } from './someString.model'

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://127.0.0.1:27017", {
      }
    ),
    MongooseModule.forFeature(
      [{name : 'SomeString', schema: SomeStringSchema}])
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
