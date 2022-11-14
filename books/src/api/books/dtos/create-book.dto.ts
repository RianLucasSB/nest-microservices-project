import { IsString, IsDefined, IsNumber } from 'class-validator';

export class CreateBookDto {
    @IsDefined()
    @IsString()
    title: string;

    @IsDefined()
    @IsString()
    author: string;

    @IsDefined()
    @IsString()
    imageUrl: string;

    @IsDefined()
    @IsNumber()
    quantity: number;
}
