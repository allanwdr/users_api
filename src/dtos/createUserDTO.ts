import AddressDTO from "./addressDTO";
import PhoneDTO from "./phoneDTO";

export default interface CreateUserDTO {
    name?: string;
    motherName?: string;
    fatherName?: string;
    document?: string;
    gender?: string;
    birthDate?: string;
    email?: string;
    phone?: PhoneDTO;
    address?: AddressDTO;
}
