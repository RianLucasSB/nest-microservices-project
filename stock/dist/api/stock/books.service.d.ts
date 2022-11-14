import { Model } from 'mongoose';
import { CreateBookDto } from './dtos/create-book.dto';
import { BooksDocument } from './schemas/books.schema';
export declare class BooksService {
    private readonly BooksModel;
    constructor(BooksModel: Model<BooksDocument>);
    create(createBookDto: CreateBookDto): Promise<any>;
    getAll(): Promise<any[]>;
}
