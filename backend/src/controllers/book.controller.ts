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

// Obtener libro por ID
export const getBooksById = async (req: Request, res: Response) => {
    try {
      const book = await BookModel.findById(req.params.id);
      if (!book) return res.status(404).json({ message: "Libro no encontrado" });
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener libro" });
    }
  };

//POST

export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await BookModel.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al crear el libro:', error); // Agrega este log para ver la causa real
    return res.status(400).json({ error: 'Error al crear el libro' });
  }
};
/* export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = await BookModel.create(req.body);
        return res.status(201).json(newBook);
    }   catch (error) {
        res.status(400).json({ error: "Error al crear el libro" });
    }
}; */

//PUT by ID
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
  
  //DELETE by ID
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
