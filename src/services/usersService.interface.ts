import User from "../entities/user";

export default interface IUsersService {
    getUserById(id: string): Promise<User | null>;

    getUserByEmail(email: string): Promise<User | null>;

    getUserByDocument(document: string): Promise<User | null>;

    saveUser(user: User): Promise<User | null>;

    updateUser(user: User): Promise<User | null>;

    deleteUser(id: string): Promise<void>;
}
