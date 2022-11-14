import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { Books, BooksSchema } from './schemas/stock.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
    ],
    providers: [StockService],
    controllers: [StockController],
})
export class StockModule {}
