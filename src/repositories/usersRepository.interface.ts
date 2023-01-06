import User from "../entities/user";

export default interface IUsersRepository {
    findById(id: string): Promise<User>;

    findByEmail(email: string): Promise<User>;

    findByDocument(document: string): Promise<User>;

    save(user: User): Promise<User | null>;

    update(user: User): Promise<User | null>;

    delete(id: string): Promise<void>;
}
