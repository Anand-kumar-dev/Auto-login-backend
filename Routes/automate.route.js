import { Router } from "express";
import { auto } from "../controllers/automate.controller.js";

const router = Router();


router.post('/', auto )

export default router