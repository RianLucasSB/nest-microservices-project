import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice<MicroserviceOptions>({
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
    });

    await app.startAllMicroservices();
    await app.listen(process.env.PORT, async () =>
        console.log(`Server is running at ${await app.getUrl()}`),
    );
}
bootstrap();
