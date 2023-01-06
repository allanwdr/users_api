import User from "../entities/user";
import IUsersRepository from "../repositories/usersRepository.interface";
import IUsersService from "./usersService.interface";

export default class UsersService implements IUsersService {
    private repository: IUsersRepository;

    constructor(repository: IUsersRepository) {
        this.repository = repository;
    }

    public async getUserById(id: string): Promise<User | null> {
        return await this.repository.findById(id);
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        return await this.repository.findByEmail(email);
    }

    public async getUserByDocument(document: string): Promise<User | null> {
        return await this.repository.findByDocument(document);
    }

    public async saveUser(user: User): Promise<User | null> {
        return await this.repository.save(user);
    }

    public async updateUser(user: User): Promise<User | null> {
        return await this.repository.update(user);
    }

    public async deleteUser(id: string): Promise<void> {
        return await this.repository.delete(id);
    }
}
