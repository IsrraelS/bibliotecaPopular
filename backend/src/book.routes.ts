import { Router } from "express";
import { getBooks, createBook, updateBook, deleteBook, getBooksById } from "./controllers/book.controller";
//

const router = Router();

router.get("/" , getBooks);
router.post("/" , createBook);
router.put("/:id", updateBook);     
router.delete("/:id", deleteBook); 
// Obtener un libro por ID
router.get("/:id", getBooksById);



export default router;
