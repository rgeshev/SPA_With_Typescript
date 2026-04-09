import { PostsService } from "../services/posts.service";
import { render } from "../utils/html";

const postsService = new PostsService();

export async function renderCreatePostView() {
    const template = `
    <form  id="create-post-form">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />

        <label for="body">Title</label>
        <input type="text" name="title" id="title" />

        <button type="submit">Create post</button>
    </form>
    `

    render(template);

    const formEl = document.getElementById('create-post-form');

    if(formEl) {
        formEl.addEventListener('submit', async e => {
            e.preventDefault();

            const formData = new FormData(e.target as HTMLFormElement);

            const title = formData.get('title') as string;
            const body = formData.get('body') as string;

            const result = await postsService.create({ title, body, id: 1, userId: 1 });
            console.log(result);
        });
    }
}