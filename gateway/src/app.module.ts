import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EMicrosservices } from './@types/global/microsservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: EMicrosservices.STOCK_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://jjmckdaw:sJyc5xs_fn5HcxorxbprbKRDyHB1iiHA@toad.rmq.cloudamqp.com/jjmckdaw',
          ],
          queue: 'stock_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: EMicrosservices.BOOK_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://jjmckdaw:sJyc5xs_fn5HcxorxbprbKRDyHB1iiHA@toad.rmq.cloudamqp.com/jjmckdaw',
          ],
          queue: 'books_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
