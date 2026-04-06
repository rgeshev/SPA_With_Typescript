import type { User } from "../interfaces/user.interface";
import { UsersService } from "../services/users.service";
import { render } from "../utils/html";

const usersService = new UsersService();

export async function renderUsersView() {
    const users = await usersService.getAll();

    const template = `
        <div>
            ${users.map(user => generateSingleUserHtml(user)).join('')}
        </div>
    `;

    render(template);
}

function generateSingleUserHtml(user: User) {
    return `
        <li>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </li>
    `
}