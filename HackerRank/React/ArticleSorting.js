import 'h8k-components'
import React, { useState } from 'react'
import Articles from './components/Articles'
import './App.css'

/**
 * La razón por la que tu versión no funciona como esperas es porque el método sort modifica el arreglo 
 * original in-place (es decir, muta directamente el arreglo articles), lo que puede causar problemas en React 
 * relacionados con la inmutabilidad del estado. En React, el estado debe tratarse como inmutable para que los componentes 
 * se actualicen correctamente. Si articles se modifica directamente, React podría no detectar que se ha producido un cambio, y por 
 * lo tanto, no volverá a renderizar el componente.
 */

function App({ articles }) {
  const sortArticles = (articles, comparator) => {
    return [...articles].sort(comparator)
  }

  const mostUpvotedFilter = (a, b) => b.upvotes - a.upvotes
  const mostRecentFilter = (a, b) => new Date(b.date) - new Date(a.date)
  const [orderedArticles, setOrderedArticles] = useState(
    sortArticles(articles, mostUpvotedFilter)
  )

  const handleMostUpvoted = () => {
    setOrderedArticles(sortArticles(articles, mostUpvotedFilter))
  }
  const handleMostRecent = () => {
    setOrderedArticles(sortArticles(articles, mostRecentFilter))
  }

  return (
    <>
      <h8k-navbar header='Sorting Articles'></h8k-navbar>
      <div className='App'>
        <div className='layout-row align-items-center justify-content-center my-20 navigation'>
          <label className='form-hint mb-0 text-uppercase font-weight-light'>
            Sort By
          </label>
          <button
            data-testid='most-upvoted-link'
            className='small'
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid='most-recent-link'
            className='small'
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={orderedArticles} />
      </div>
    </>
  )
}
export default App
