import { Request, Response } from "express";
import { myPrisma } from "../config/db.config";

export const BuatUser = async (req: Request, res: Response) => {
    try {
        const user = await myPrisma.user.create({
            data: {
                namaLengkap: req.body.namaLengkap,
                email: req.body.email,
                password: req.body.password
            }
        });

        res.send(user);
    } catch (error) {
        console.log(error);
    }
};

export const GetUser: any = async (req: Request, res: Response) => {
    const user = await myPrisma.user.findUnique({ where: { id: Number(req.params.id) } });
    res.send(user);
};

export const UpdateUser = async (req: Request, res: Response) => {
    await myPrisma.user.update({
        where: { id: Number(req.params.id) }, data: {
            ...req.body
        }
    });

    res.send({ pesan: "Berhasil diupdate" });
};

export const DeleteUser = async (req: Request, res: Response) => {
    await myPrisma.user.delete({ where: { id: Number(req.params.id) } });
    res.send(null);
};