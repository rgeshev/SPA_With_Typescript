import { BASE_URL } from "../constants";
import type { User } from "../interfaces/user.interface";
import { APIService } from "./api";

export class UsersService extends APIService<User> {
    constructor() {
        super(`${BASE_URL}/users`);
    }
}