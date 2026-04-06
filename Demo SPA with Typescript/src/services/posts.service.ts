import { BASE_URL } from "../constants";
import type { Post } from "../interfaces/post.interface";
import { APIService } from "./api";

export class PostsService extends APIService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}