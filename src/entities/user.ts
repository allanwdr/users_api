import { uuid } from "uuidv4";
import Address from "./address";
import Phone from "./phone";

export default class User {
    public id: string;
    public createdDate?: Date;
    public updatedDate?: Date;
    public name?: string;
    public motherName?: string;
    public fatherName?: string;
    public document?: string;
    public gender?: string;
    public birthDate?: string;
    public email?: string;
    public status?: string;
    public phone?: Phone;
    public address?: Address;

    constructor(user: Omit<User, 'id'>, id?: string) {
        this.id = id;
        Object.assign(this, user)

        if (user.phone) {
            this.phone = new Phone(user.phone);
        }

        if (user.address) {
            this.address = new Address(user.address);
        }

        if (!this.createdDate) {
            this.createdDate = new Date();
        }
    }
}
