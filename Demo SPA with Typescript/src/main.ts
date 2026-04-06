import type { Routes } from './interfaces/routes.interface';
import { Router } from './router';
import './style.css'
import { renderPostsView } from './views/posts.view';
import { renderUsersView } from './views/users.view';

const routes: Routes = {
    '/posts': renderPostsView,
    '/users': renderUsersView
}
const router = new Router(routes)

function setupNavLinks() {
    const postsLinkEl = document.getElementById('posts-link');
    const usersLinkEl = document.getElementById('users-link');

    if (postsLinkEl) {
        postsLinkEl.addEventListener('click', e => {
            e.preventDefault();

            router.navigate('/posts');
        })
    };

    if (usersLinkEl) {
        usersLinkEl.addEventListener('click', e => {
            e.preventDefault();

            router.navigate('/users');
        })
    };
}


setupNavLinks();