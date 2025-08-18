import mongoose, { Schema, Document } from "mongoose";

//  Definir interfaz del libro
export interface IBook extends Document {
  id: string;
  title: string;
  author: string;
  year: number;
}

//  Definir el esquema de Mongoose
const BookSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true
  },
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

// 3Crear y exportar el modelo
export const BookModel = mongoose.model<IBook>("Book", BookSchema);
