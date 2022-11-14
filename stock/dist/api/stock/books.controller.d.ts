import { StockService } from './stock.service';
export declare class StockController {
    private readonly StockService;
    constructor(StockService: StockService);
    addBook(payload: {
        id: string;
        quantity: number;
    }): Promise<any>;
}
