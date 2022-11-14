import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Document & Books;

@Schema({
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})
export class Books {
    @Prop({ type: 'String' })
    title: string;

    @Prop({ type: 'String' })
    author: number;

    @Prop({ name: 'image_url', type: 'String' })
    imageUrl: string;

    @Prop({ name: 'quantity', type: 'Number' })
    quantity: 50;

    @Prop()
    timestamps: true;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
