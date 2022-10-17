import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Wagner Ferreira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora enim porro voluptas libero, sapiente illo magni at sequi sint quisquam! Omnis mollitia in aperiam provident odit assumenda alias illo quaerat?"
          />
          <Post
            author="Wagner Ferreira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora enim porro voluptas libero, sapiente illo magni at sequi sint quisquam! Omnis mollitia in aperiam provident odit assumenda alias illo quaerat?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
