import { response, Router } from "express";
import CreateUserController from "./controllers/createUserController";

const router = Router();

router.post("/accounts", async (req, res) => {
    const controller  = new CreateUserController();
    const createUser = await controller.handler(req);
    return res.status(createUser.status).send(createUser.body);
});

export default router;