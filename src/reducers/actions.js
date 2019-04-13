import axios from 'axios';

export const FETCHING_WORK_TYPES = 'FETCHING_WORK_TYPES';
export const DONE_FETCHING_WORK_TYPES = 'DONE_FETCHING_WORK_TYPES';
export const ERROR_FETCHING_WORK_TYPES = 'ERROR_FETCHING_WORK_TYPES';

export function fetchWorkTypesAsync () {
    return async dispatch => {
        dispatch({ type: FETCHING_WORK_TYPES });
        
        let fetchedBody = await axios.get('https://api1.remontista.ru/tools/all_work_type');
        
        dispatch({
            type: DONE_FETCHING_WORK_TYPES,
            payload: { workTypes: fetchedBody.data.work_types }
        }); 
        
    }
}

export function fetchWorkTypes() {
    return {
      type: FETCHING_WORK_TYPES
    };
}

export function fetchWorkTypesDone( fetchedBody ) {
    if ( fetchedBody.result === 'success' ) {
        return {
            type: DONE_FETCHING_WORK_TYPES,
            payload: { workTypes: fetchedBody.work_types }
          }
    } else {
        return {
            type: ERROR_FETCHING_WORK_TYPES,
            payload: { parts: ['smth went wrong'] }
          }
    }
}