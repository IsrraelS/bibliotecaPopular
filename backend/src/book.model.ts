import mongoose, { Document, Schema } from "mongoose";

// interfax del libro
interface Book extends Document {
    title: string;
    author: string;
    year: number;
}
 //esquema del libro
 const BookSchema = new Schema<Book> ({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, require: true }
 })

 // crear modelo
 export const BookModel = mongoose.model<Book>('Book', BookSchema);

 

