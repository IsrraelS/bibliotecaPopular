import mongoose, { Schema, Document } from "mongoose";

// 1️⃣ Definir interfaz del libro
export interface IBook extends Document {
  title: string;
  author: string;
  year: number;
}

// 2️⃣ Definir el esquema de Mongoose
const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // añade createdAt y updatedAt automáticamente
});

// 3️⃣ Crear y exportar el modelo
export const BookModel = mongoose.model<IBook>("Book", BookSchema);
