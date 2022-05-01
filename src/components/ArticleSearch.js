import React, {useEffect} from 'react';
import useData from '../hooks/useData'

import './ArticleSearch.css'

function ArticleSearch() {

    const [data, query, setQuery, loading, error] = useData(
        `http://hn.algolia.com/api/v1/search`
    )

    const handleQueryChange = e => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        if(error) {
            console.log(error);
            throw new Error(error)
        }
    }, [error])

    return(
        <div className='article-search container'>
            <input type='text' 
                    value={query} 
                    onChange={handleQueryChange} 
                    />

            {error && <div>`There was an error: ${error}`</div>}

            {loading && <div>Loading...</div>}

            <ul className='article-list'>
                {data.map((article, ndx) => (
                    <li className='article' key={ndx}>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleSearch