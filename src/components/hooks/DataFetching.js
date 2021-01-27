import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading : false,
                post : action.payload,
                error : ''
            }

        case 'FETCH_ERROR':
            return{
                loading : false,
                post : {},
                error : 'Something went wrong.'
            }

        default:
            return state
    }
}


const DataFetching = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const url = "";

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(resp => {
            dispatch({type : "FETCH_SUCCESS", payload: resp.data})
        })
        .catch(error => {
            dispatch({type : "FETCH_ERROR"})
        })
    }, [])

    return (
        <div className="container">
            <p>
                Post title - {state.loading ? 'Loading' : state.post.title}
            </p>
            
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching
