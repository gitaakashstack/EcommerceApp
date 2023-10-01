import { NextFunction, Request, Response } from "express";

//* A Callable Interface
export interface responseMWType {
    (req: Request, res: Response, next: NextFunction): Promise<Response<any>>
}

export interface nextMWType {
    (req: Request, res: Response, next: NextFunction): void
}