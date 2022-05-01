import React from 'react';
import ArticleSearch from './components/ArticleSearch'

import {Errorboundary} from './components/ErrorBoundary';

import './App.css'

function App() {
  return (
    <div>
        <h1 className='title title-container'>Search for Articles</h1>
        <Errorboundary>
          <ArticleSearch />
        </Errorboundary>
      </div>
  )
}

export default App;
