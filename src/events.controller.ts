import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Event } from "./event.entity";

@Controller("/events")
export class EventsController {

    constructor(
        @InjectRepository(Event)
        private readonly repository: Repository<Event>
    ) { }

    @Get()
    async findAll() {
        return await this.repository.find();
    }

    @Get("/:id")
    async findOne(@Param("id") id) {
        console.log(id);
        return await this.repository.findOne({ where: { id } });
    }

    @Post()
    async create(@Body() body) {
        return await this.repository.save({
            ...body,
            when: new Date(body.when)
        })
    }

    @Patch("/:id")
    async update(@Param("id") id, @Body() body) {
        const event = await this.repository.findOne({ where: { id } });
        return await this.repository.save({
            ...event,
            ...body,
            when: body.when ? new Date(body.when) : event.when
        })
    }

    @Delete("/:id")
    async delete(@Param("id") id) {
        const event = await this.repository.findOne({ where: { id } });
        return await this.repository.delete(event);
    }
}