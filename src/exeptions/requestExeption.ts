export default class RequestExeption extends Error {
    status: number;
    message: string;
    errorCode?: string;
    detail?: string;
    timestamp?: string;

    constructor(
        message: string,
        status: number,
        errorCode?: string,
        detail?: string
    ) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
        this.detail = detail;
        this.timestamp = new Date().toISOString();
    }
}
