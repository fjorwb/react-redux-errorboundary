import {useState, useEffect} from 'react';
import axios from 'axios'

function useData(url) {

    const [query, setQuery] = useState('react hooks')
    const [data, setData] = useState([])

    // loading

    const [loading, setLoading] = useState(false)

    // error state
    const [error, setError] = useState('')

    // cancel token
    const [token, setToken] = useState(undefined)

    useEffect(() => {
        if(token) {
            token.cancel('REQUEST_CANCELLED')
        }

        async function fetchData() {
            setError('')
            setLoading(true)
            setData([])

            const token = await axios.CancelToken.source()
            setToken(token)

            const response = await axios.get(url,
            {cancelToken: token.token,
                params: {
                    query: query
                }
            }
            )
            setToken(undefined)
            setData(response.data.hits)
            setLoading(false)
        }
        fetchData()
        .catch((error) => {
            if(error.message !== 'REQUEST_CANCELLED') {
                const msg = error.message
                setError(msg)
            }
            setToken(undefined)
        })
    }, [query, token, url])

    return [data, query, setQuery, loading, error]
}

export default useData
