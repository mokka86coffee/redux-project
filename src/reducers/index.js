import { FETCHING_WORK_TYPES, DONE_FETCHING_WORK_TYPES } from './actions';


export default function ( state = {}, action ) {
    
    switch (action.type) {
        
        case FETCHING_WORK_TYPES: return { ...state, workTypes: ['fetching'] };
        case DONE_FETCHING_WORK_TYPES: return { ...state, workTypes: action.payload.workTypes };
        
        default: return state;
    }
}



