import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MovieSearchPage from "./components/MovieSearchPage/MovieSearchPage";

const App = () => {
  return (
    <div className="app scroll">
      <MovieSearchPage />
    </div>
  );
}

export default App;
