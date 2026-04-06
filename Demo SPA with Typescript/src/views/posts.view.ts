import { PostsService } from "../services/posts.service";
import type { Post } from "../interfaces/post.interface";
import { render } from "../utils/html";

const postsService = new PostsService();

export async function renderPostsView() {
    const posts = await postsService.getAll();

    const template = `
        <div>
            ${posts.map(post => generateSinglePostHtml(post)).join('')}
        </div>
    `;

    render(template);

};

function generateSinglePostHtml(post: Post) {
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `
}