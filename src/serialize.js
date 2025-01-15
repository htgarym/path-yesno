import { match } from 'path-to-regexp';

const matchPath = match('/users/:id/:tab(\\bhome\\b|\\bphotos\\b|\\bbio\\b)');
const result = matchPath('/users/123/home');

console.log(result); // { path: '/users/123/home', index: 0, params: { id: '123', tab: 'home' } }
