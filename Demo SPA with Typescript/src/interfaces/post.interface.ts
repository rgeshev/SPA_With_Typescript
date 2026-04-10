export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// export interface CreatePost {
//     userId: number;
//     title: string;
//     body: string;
// }

export type CreatePost = Omit<Post, 'id'>;