import { Request, Response } from "express";

export default interface IControler {
    handler(request: Request, response: Response): Promise<any | null>
}
