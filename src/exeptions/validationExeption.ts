import RequestExeption from "./requestExeption";
import * as httpStatus from "http-status";

export default class ValidationExeption extends RequestExeption {
    constructor(message: string, errorCode?: string, detail?: string) {
        super(message, httpStatus.BAD_REQUEST, errorCode, detail)
    }
}
