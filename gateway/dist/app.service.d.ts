import { ClientProxy } from '@nestjs/microservices';
import { TBookPayload } from './@types/schemas/books';
import { TStockPayload } from './@types/schemas/stock';
export declare class AppService {
    private readonly booksService;
    private readonly stockService;
    constructor(booksService: ClientProxy, stockService: ClientProxy);
    get(): Promise<import("rxjs").Observable<any>>;
    create(payload: TBookPayload): Promise<import("rxjs").Observable<any>>;
    addBooksToStock(payload: TStockPayload): Promise<import("rxjs").Observable<any>>;
}
