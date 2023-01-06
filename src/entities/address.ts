import { uuid } from "uuidv4";

export default class Address {
    public readonly id?: string;
    public zipCode?: string;
    public street?: string;
    public number?: string;
    public complement?: string;
    public neiborhood?: string;
    public city?: string;
    public state?: string;
    public country?: string;

    constructor(address: Omit<Address, 'id'>, id?: string) {
        this.id = id || uuid();

        Object.assign(this, address);
    }
}
