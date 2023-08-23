import styles from "./App.module.css";
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/99615216?v=4',
      name: 'Eduardo Scheunemann',
      role: 'Student'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'O botico doi, mas só no começo'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-21 10:37:00')
},
{
    id: 2,
    author: {
      avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      name: 'Eduardo Francisco',
      role: 'intern'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de dar o tobinha, foi bom'},
      {type: 'link', content: 'IAAAAA'},
  ],
    publishedAt: new Date('2023-08-20 10:38:00')
}
];

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


