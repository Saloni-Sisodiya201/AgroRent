import express from "express";
import { createdNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";  
const router = express.Router();
router.get("/",getAllNotes);
router.post("/",createdNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;