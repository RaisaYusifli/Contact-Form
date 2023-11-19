import express from "express";
import contactRouter from './routes/contactRouter.js';

const router=express.Router();
router.use(contactRouter);
export default router;