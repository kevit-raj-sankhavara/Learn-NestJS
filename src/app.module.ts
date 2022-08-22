import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event, EventSchema } from './event.schema';
import { EventsController } from './events.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
  MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule { }