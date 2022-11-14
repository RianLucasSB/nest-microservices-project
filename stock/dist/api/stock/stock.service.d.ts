import { Model } from 'mongoose';
import { Books, BooksDocument } from './schemas/stock.schema';
export declare class StockService {
    private readonly BooksModel;
    constructor(BooksModel: Model<BooksDocument>);
    addBookToStock({ id, quantity }: {
        id: any;
        quantity: any;
    }): Promise<import("mongoose").Document<any, any, any> & Books & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
