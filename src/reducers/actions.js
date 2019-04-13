export const FETCHING_WORK_TYPES = 'FETCHING_WORK_TYPES';
export const DONE_FETCHING_WORK_TYPES = 'DONE_FETCHING_WORK_TYPES';
export const ERROR_FETCHING_WORK_TYPES = 'ERROR_FETCHING_WORK_TYPES';

export function fetchParts() {
    return {
      type: FETCHING_WORK_TYPES
    };
}

export function fetchPartsDone( fetchedBody ) {
    if ( fetchedBody.result === 'success' ) {
        return {
            type: DONE_FETCHING_WORK_TYPES,
            payload: { parts: work_types }
          };
    }
}