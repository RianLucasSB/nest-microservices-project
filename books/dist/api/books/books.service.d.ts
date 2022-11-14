import { Model } from 'mongoose';
import { CreateBookDto } from './dtos/create-book.dto';
import { Books, BooksDocument } from './schemas/books.schema';
export declare class BooksService {
    private readonly BooksModel;
    constructor(BooksModel: Model<BooksDocument>);
    create(createBookDto: CreateBookDto): Promise<import("mongoose").Document<any, any, any> & Books & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(import("mongoose").Document<any, any, any> & Books & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
