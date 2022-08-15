import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { appendFile } from 'fs';
import { AppService } from './app.service';

@Controller("users/")
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) { }

  @Get("getUser")
  getUser(): string {
    return "Raj";
  }

  @Post("setUser")
  @HttpCode(HttpStatus.CREATED)
  setUser(): string {
    return "Raj";
  }
}

