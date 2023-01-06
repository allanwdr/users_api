import { Request, Response } from "express";
import IControler from "./controller.interface";
import * as httpStatus from "http-status";
import CreateUserUseCase from "../useCases/createUserUseCase";
import UsersService from "../services/usersService";
import RequestExeption from "../exeptions/requestExeption";
import Messages from "../constants/messages";
import UsersMongoDDRepository from "../repositories/usersMongoDbRepository";

export default class CreateUserController implements IControler {

    async handler(request: Request): Promise<any> {
        console.log(`Request recebido: ${request.body}`);

        try {
            const usersRepository = new UsersMongoDDRepository();
            const usersService = new UsersService(usersRepository);
            const userCase = new CreateUserUseCase(request.body, usersService);

            const user = await userCase.execute();

            return {
                status: httpStatus.OK,
                body: user
            }
        } catch (error) {
            return this.errorHandler(error);
        }
    }

    private errorHandler(error: Error) {
        let body: object;
        let status: number;

        if (error instanceof RequestExeption) {
            status = error.status;
            body = {
                message: error.message,
                errors: error.detail ? error.detail : undefined
            }
        } else {
            status = httpStatus.INTERNAL_SERVER_ERROR
            body = {
                message: Messages.INTERNAL_SERVER_ERROR
            }
        }

        return {
            status,
            body
        }
    }
}
