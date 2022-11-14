import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly StockService: StockService) {}

  @MessagePattern({ cmd: 'add-book' })
  async addBook(@Payload() payload: { id: string; quantity: number }) {
    console.log(payload);
    return await this.StockService.addBookToStock(payload);
  }
}
