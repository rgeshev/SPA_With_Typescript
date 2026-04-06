import { PostsService } from "../services/posts.service";
import type { Post } from "../interfaces/post.interface";
import { render } from "../utils/html";

const postsService = new PostsService();

export async function renderPostsView(): Promise<void> {
    const posts = await postsService.getAll();

    const template = `
        <ul>
            ${posts.map(post => generateSinglePostHtml(post)).join('')}
        </ul>
    `;

    render(template);

};

function generateSinglePostHtml(post: Post): string {
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `
}