import {HeaderComponent} from './components/HeaderComponent';
import {NavigationComponent} from './components/NavigationComponent';
import {Posts} from './components/Posts';
import {CreatePost} from './components/CreatePost';
import {FavoritePosts} from './components/FavoritePosts';
import { Loader } from './components/Loader';

const header = new HeaderComponent('header');
const loader = new Loader('loader');
const posts = new Posts('posts', '.posts__template', loader);
const createPost = new CreatePost('create');
const favoritePosts = new FavoritePosts('favorite', loader);
const tabs = {
  posts,
  create: createPost,
  favorite: favoritePosts
}
const navigation = new NavigationComponent('navigation', tabs);
