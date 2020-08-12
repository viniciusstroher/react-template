import {FILTER_EVENT} from "../reducers";

export function filterEventAction(filter){
    return {type: FILTER_EVENT,
            payload: { filter }}
}