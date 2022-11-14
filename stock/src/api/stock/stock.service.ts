import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books, BooksDocument } from './schemas/stock.schema';

@Injectable()
export class StockService {
    constructor(
        @InjectModel(Books.name)
        private readonly BooksModel: Model<BooksDocument>,
    ) {}

    async addBookToStock({ id, quantity }) {
        const book = await this.BooksModel.findByIdAndUpdate(id, {
            quantity: quantity,
        });

        return book;
    }
}
