import { Router } from "express";
import { getBooks, createBook, updateBook, deleteBook } from "./controllers/book.controller";
//getBookById

const router = Router();

router.get("/" , getBooks);
router.post("/" , createBook);
router.put("/:id", updateBook);     
router.delete("/:id", deleteBook); 
// Obtener un libro por ID
//router.get("/:id", getBookById);



export default router;
