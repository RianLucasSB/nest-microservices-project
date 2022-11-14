import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EMicrosservices } from './@types/global/microsservices';
import { TBookPayload } from './@types/schemas/books';
import { TStockPayload } from './@types/schemas/stock';

@Injectable()
export class AppService {
  constructor(
    @Inject(EMicrosservices.BOOK_SERVICE)
    private readonly booksService: ClientProxy,
    @Inject(EMicrosservices.STOCK_SERVICE)
    private readonly stockService: ClientProxy,
  ) {}

  async get() {
    try {
      return this.booksService.send({ cmd: 'get-all-books' }, {});
    } catch (err) {
      console.log(err);
    }
  }

  async create(payload: TBookPayload) {
    try {
      return this.booksService.send({ cmd: 'create-book' }, payload);
    } catch (err) {
      console.log(err);
    }
  }

  async addBooksToStock(payload: TStockPayload) {
    try {
      return this.stockService.send({ cmd: 'add-book' }, payload);
    } catch (err) {
      console.log(err);
    }
  }
}
