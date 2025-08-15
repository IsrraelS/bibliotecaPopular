import { Request, Response } from "express";
import { BookModel } from "../models/books.model";

//GET
export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await BookModel.find();
        res.json(books);
    }   catch (error) {
        res.status(500).json ({ error: "Error al obtener los libros" });
    }
}; 

//POST
export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = new BookModel(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    }   catch (error) {
        res.status(400).json({ error: "Error al crear el libro" });
    }
};

//PUT 
export const updateBook = async (req: Request, res: Response) => {
    try {
      const updatedBook = await BookModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ error: "Error al actualizar libro" });
    }
  };
  
  //DELETE
  export const deleteBook = async (req: Request, res: Response) => {
    try {
      const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }
      res.json({ message: "Libro eliminado correctamente" });
    } catch (error) {
      res.status(400).json({ error: "Error al eliminar libro" });
    }
  };
