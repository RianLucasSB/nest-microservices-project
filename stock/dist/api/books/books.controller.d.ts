import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createdBookDto: CreateBookDto): Promise<import("mongoose").Document<any, any, any> & import("./schemas/books.schema").Books & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    get(): Promise<(import("mongoose").Document<any, any, any> & import("./schemas/books.schema").Books & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
