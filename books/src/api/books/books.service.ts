import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dtos/create-book.dto';
import { Books, BooksDocument } from './schemas/books.schema';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Books.name)
        private readonly BooksModel: Model<BooksDocument>,
    ) {}

    async create(createBookDto: CreateBookDto) {
        const createdBook = new this.BooksModel(createBookDto);

        return await createdBook.save();
    }

    async getAll() {
        return await this.BooksModel.find();
    }
}
