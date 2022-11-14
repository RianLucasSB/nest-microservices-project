"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
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
    await app.listen(process.env.PORT, async () => console.log(`Server is running at ${await app.getUrl()}`));
}
bootstrap();
//# sourceMappingURL=main.js.map