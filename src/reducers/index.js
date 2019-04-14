import { FETCHING_WORK_TYPES, DONE_FETCHING_WORK_TYPES, ERROR_FETCHING_WORK_TYPES } from './actions';


export default function ( state = {}, action ) {
    
    switch (action.type) {
        
        case FETCHING_WORK_TYPES: return { ...state, ...action.payload };
        case DONE_FETCHING_WORK_TYPES: return { ...state, ...action.payload };
        case ERROR_FETCHING_WORK_TYPES: return { ...state, ...action.payload };
        
        default: return state;
    }
}



