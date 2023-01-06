import User from "../entities/user";
import MongoDBClient from "../utils/clients/mongoDbClient";
import IUsersRepository from "./usersRepository.interface";
import { ObjectId } from "mongodb";

const USER_TABLE_NAME = "users";

export default class UsersMongoDDRepository implements IUsersRepository {
    private mongoDBClient: MongoDBClient;

    constructor() {
        this.mongoDBClient = new MongoDBClient(USER_TABLE_NAME);
    }

    async findById(id: string): Promise<User | null> {
        return await this.mongoDBClient.findFirst({ id });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.mongoDBClient.findFirst({ email });
    }

    async findByDocument(document: string): Promise<User | null> {
        return await this.mongoDBClient.findFirst({ document });
    }

    async save(user: User): Promise<User | null> {
        const { insertedId } = await this.mongoDBClient.save(user);
        // user.id = insertedId;
        return {id: insertedId, ...user} as User;
    }

    async update(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
