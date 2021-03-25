import express, { Request, Response } from "express";
import mongoose from "mongoose";
import {noteRoutes} from './services/note'

(async () => {
  const app = express();
  app.use(express.json());

  await mongoose.connect("mongodb://localhost:27017/offline", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  app.get('/', (req: Request, res: Response) => {
      res.json({status: 'ok'})
  })
  app.use('/notes', noteRoutes)
  
  app.listen(4000, () => {
      console.log('app running at port 4000')
  })
})()
