import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EBooksCommands } from 'src/@types/schemas/books';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @MessagePattern({ cmd: EBooksCommands.CREATE_BOOK })
    async create(@Payload() createdBookDto: CreateBookDto) {
        return await this.booksService.create(createdBookDto);
    }

    @MessagePattern({ cmd: EBooksCommands.GET_ALL })
    async get() {
        return await this.booksService.getAll();
    }
}
