import { useState } from 'react'
//import './App.css'
import CounterPage from './pages/CounterPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page } from './pages/Page';
import { Layout } from './components/Layout';
import { PostsPage }  from './pages/PostsPage';
import { FilmsPage } from './pages/FilmsPage';
import { FilmPage } from './pages/FilmPage';
import { CharactersPage } from './pages/CharactersPage';
import { CharacterPage } from './pages/CharacterPage';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<PostsPage />} />
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/page" element={<Page />} />
              <Route path="/films" >
                <Route index element={<FilmsPage />} />
                <Route path=":filmId" element={<FilmPage />} />
              </Route>  
              <Route path="/characters" >
                <Route index element={<CharactersPage />} />
                <Route path=":characterId" element={<CharacterPage />} />
              </Route>
            </Route>
      </Routes>
    </Router>
  )
}

export default App
