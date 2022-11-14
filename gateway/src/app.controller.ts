import { Body, Controller, Get, Post, Patch } from '@nestjs/common';
import { TBookPayload } from './@types/schemas/books';
import { TStockPayload } from './@types/schemas/stock';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get() {
    return await this.appService.get();
  }

  @Post('/create_book')
  async create(@Body() payload: TBookPayload) {
    return await this.appService.create(payload);
  }

  @Patch('/add_book')
  async addBook(@Body() payload: TStockPayload) {
    console.log(payload);

    return await this.appService.addBooksToStock(payload);
  }
}
