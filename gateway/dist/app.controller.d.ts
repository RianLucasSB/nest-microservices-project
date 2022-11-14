import { TBookPayload } from './@types/schemas/books';
import { TStockPayload } from './@types/schemas/stock';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get(): Promise<import("rxjs").Observable<any>>;
    create(payload: TBookPayload): Promise<import("rxjs").Observable<any>>;
    addBook(payload: TStockPayload): Promise<import("rxjs").Observable<any>>;
}
