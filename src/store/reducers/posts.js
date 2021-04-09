import * as actionTypes from '../actions/actionsTypes'
import updateObject from '../utility'

const initialState = {
    postsList:[],
    error:null,
    loading:false
}

const postsStart=(state)=>{
    return updateObject(state, {
        error:null,
        loading:true
    })
}

const postsSuccess=(state, action)=>{
    return updateObject(state,{
        error:null,
        loading:false,
        postsList:action.postsList
    })
}


const postsFail=(state, action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false,
    })
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.POSTS_START:
            return postsStart(state)
        case actionTypes.POSTS_SUCCESS:
            return postsSuccess(state, action)
        case actionTypes.POSTS_FAIL:
            return postsFail(state, action)
        default:
            return state        
    }
}

export default reducer