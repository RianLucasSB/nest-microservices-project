import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@cluster0.dawdtv6.mongodb.net/books?retryWrites=true&w=majority',
        ),
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
