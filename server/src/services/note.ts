import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { Note } from "../models/Note";
import { postNoteValidation } from "../validations/note";

export const noteRoutes = Router().get('/', async (req, res) => {
    const notes = await Note.find().sort([['date', -1]]);
    res.json({status: 'ok', data: notes})
}).post('/', postNoteValidation, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({status: 'error', errors: errors.array()}).status(400)
    }
    const note = new Note({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
        nominal: req.body.nominal,
        createdAt: new Date()
    })
    await note.save()
    return res.json({status: 'ok', data: note})
})