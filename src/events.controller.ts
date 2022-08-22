import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from './event.schema';

@Controller("/events")
export class EventsController {
    constructor(
        @InjectModel(Event.name)
        private Event: Model<EventDocument>) { }

    @Get()
    getAll() {
        return this.Event.find();
    }

    @Post()
    async createUser(@Body() body) {
        const data = new this.Event(body)
        return data.save(body);
    }
}   