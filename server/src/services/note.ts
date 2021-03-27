import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { Note } from "../models/Note";
import { postNoteValidation, postSyncNoteValidation, putNoteValidation } from "../validations/note";

export const noteRoutes = Router()

  .get("/", async (req, res) => {
    const notes = await Note.find().sort([["date", -1]]);
    res.json({ status: "ok", data: notes });
  })

  .post("/", postNoteValidation, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ status: "error", errors: errors.array() }).status(400);
    }
    const note = new Note({
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
      nominal: req.body.nominal,
      createdAt: new Date(),
    });
    await note.save();
    return res.json({ status: "ok", data: note });
  })
  
  .put('/:id', putNoteValidation, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({status: 'error', errors: errors.array()})
    }
    try {
      const note = await Note.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
        nominal: req.body.nominal,
        date: req.body.date,
        category: req.body.category,
        updatedAt: new Date()
      }, {new: true});
      return res.json({status: 'ok', data: note})
    } catch (e) {
      return res.status(400).json({status: 'error', errors: [{msg: 'Record not found'}]})
    }
  })
  
  .delete('/:id', async (req: Request, res: Response) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
      if (!note) {
        return res.status(400).json({status: 'error', errors: note})
      }
      return res.json({status: 'ok', data: note})
    } catch (e) {
      return res.status(500).json({status: 'error', errors: [{msg: 'Record not found'}]})
    }
  })
  
  .post('/sync', postSyncNoteValidation, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({status: 'error', errors: errors.array()})
    }
    try {
      for (const data of req.body.data) {
        const newNote = {
          description: data.description,
          nominal: data.nominal,
          date: data.date,
          category: data.category
        }
        if (data.status == 'insert') {
          await Note.create(newNote)
        } else if (data.status == 'update') {
          await Note.findByIdAndUpdate(data._id, newNote)
        } else if (data.status == 'delete') {
          await Note.findByIdAndDelete(data._id)
        }
      }
    } catch (e) {
      return res.status(500).json({status: 'error', errors: [{msg: e}]})
    }
    const notes = await Note.find().sort([['date', -1]])
    return res.json({status: 'ok', data: notes})
  });
