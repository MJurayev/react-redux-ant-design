import axios from 'axios'
import * as actionTypes from './actionsTypes'

export const postsStart=()=>{
    return {
        type:actionTypes.POSTS_START
    }
}



export const postsSuccess=(data)=>{
    return {
        postsList:data,
        type:actionTypes.POSTS_SUCCESS
    }
}


export const postsFail=(error)=>{
    return {
        error:error,
        type:actionTypes.POSTS_FAIL
    }
}

export const fetchPostsList=()=>{
    return async dispatch=>{
        dispatch(postsStart())
        await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=11')
        .then(res=>{
            dispatch(postsSuccess(res.data))
        })
        .catch(err=>{
            dispatch(postsFail(err))
        })
    }
}