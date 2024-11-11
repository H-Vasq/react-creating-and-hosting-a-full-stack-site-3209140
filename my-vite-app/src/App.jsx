import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>My React Blog</h1>
        <div id="page-body">
          Welcome to my blog!
        </div>
      </div>
    </>
  )
}

export default App
