import {HeaderComponent} from './components/HeaderComponent';
import {NavigationComponent} from './components/NavigationComponent';
import {Posts} from './components/Posts';
import {CreatePost} from './components/CreatePost';
import {FavoritePosts} from './components/FavoritePosts';

const header = new HeaderComponent('header');
const posts = new Posts('posts');
const createPost = new CreatePost('create');
const favoritePosts = new FavoritePosts('favorite');
const tabs = {
  posts,
  create: createPost,
  favorite: favoritePosts
}
const navigation = new NavigationComponent('navigation', tabs);