import { Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Teams from './components/Teams'
import SearchResult from './components/SearchResult'


function App() {


  return (
    <>
    <Layout >
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Pokemon />} path='/pokemon/:slug' />
        <Route element={<Teams />} path='/Teams' />
        <Route element={<SearchResult />} path='/searchresult' />
      </Routes>
    </Layout>
    </>
  )
}

export default App
