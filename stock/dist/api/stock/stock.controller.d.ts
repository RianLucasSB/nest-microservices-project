import { StockService } from './stock.service';
export declare class StockController {
    private readonly StockService;
    constructor(StockService: StockService);
    addBook(payload: {
        id: string;
        quantity: number;
    }): Promise<import("mongoose").Document<any, any, any> & import("./schemas/stock.schema").Books & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
