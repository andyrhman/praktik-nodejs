import { Router, Request, Response } from "express";
import { BuatUser, DeleteUser, GetUser, UpdateUser } from "./controllers/user.controller";

export const routes = (router: Router) => {
    router.get('/', (req: Request, res: Response) => { res.send({ status: "Ok" }); });
    router.post('/api/create-user', BuatUser);
    router.get('/api/get-user/:id', GetUser);
    router.put('/api/update-user/:id', UpdateUser);
    router.delete('/api/delete-user/:id', DeleteUser);
};