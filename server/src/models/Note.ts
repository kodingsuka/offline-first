import { model } from "mongoose";
import { NoteSchema } from "../schemas/Note";

export const Note = model('Note', NoteSchema)