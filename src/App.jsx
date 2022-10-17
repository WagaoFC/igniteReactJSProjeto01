import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <Post
        author="Wagner Ferreira"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora enim porro voluptas libero, sapiente illo magni at sequi sint quisquam! Omnis mollitia in aperiam provident odit assumenda alias illo quaerat?"
      />
      <Post
        author="Wagner Ferreira"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora enim porro voluptas libero, sapiente illo magni at sequi sint quisquam! Omnis mollitia in aperiam provident odit assumenda alias illo quaerat?"
      />
    </div>
  )
}

export default App
