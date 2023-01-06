import Messages from "../constants/messages";
import CreateUserDTO from "../dtos/createUserDTO";
import User from "../entities/user";
import ValidationExeption from "../exeptions/validationExeption";
import IUsersService from "../services/usersService.interface";
import UseCase from "./useCase.interface";

export default class CreateUserUseCase implements UseCase<void> {
    private createUserInput: CreateUserDTO;
    private usersService: IUsersService;
    private user: User;

    constructor(createUserInput: CreateUserDTO, usersService: IUsersService) {
        this.createUserInput = createUserInput;
        this.usersService = usersService;
    }

    private validateInput() {
        // this.user
    }

    private async validateUniqueUser() {
        const userAlreadyExists = await this.usersService.getUserByDocument(this.createUserInput.document);

        if (userAlreadyExists) {
            throw new ValidationExeption(Messages.USER_ALREADY_EXISTS);
        }
    }

    private async createUser() {
        const user = new User(this.createUserInput);

        this.user = await this.usersService.saveUser(user);
    }

    async execute() {
        this.validateInput();
        await this.validateUniqueUser();
        await this.createUser();

        return this.user;
    }
}
