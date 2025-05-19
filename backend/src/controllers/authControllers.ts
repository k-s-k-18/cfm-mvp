import { Request, Response, NextFunction } from "express";
import { db } from "../config/db";
import { usersTable, insertUser } from "../models/usersModel";

const emailLogin = async (req: Request, res:Response, next: NextFunction)=>{
    
    const user: insertUser = {
        email: req.body.email,
        password: req.body.password
    };

    await db.insert(usersTable).values(user);

    res.send({message: 'logged in!'});
    next();
}

const emailRegister = (req: Request, res: Response, next: NextFunction)=>{
    console.log(req.body);
    next();
}

export {emailLogin, emailRegister};