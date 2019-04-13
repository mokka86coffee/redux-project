import { FETCHING_PARTS } from './actions';

export default function ( state = {}, action ) {
    switch (action) {
        
        case FETCHING_PARTS: return { ...state, parts: action.payload };
        
        default: return state;
    }
}