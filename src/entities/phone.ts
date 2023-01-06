import { uuid } from "uuidv4";

export default class Phone {
    public readonly id?: string;
    public areaCode?: string;
    public number?: string;

    constructor(phone: Omit<Phone, 'id'>, id?: string) {
        this.id = id || uuid();
        Object.assign(this, phone);
    }
}
