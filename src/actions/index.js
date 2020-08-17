import {FILTER_EVENT} from "../reducers";

export function filterEventAction(filter,date = null){
    return {type: FILTER_EVENT,
            payload: { filter, date }}
}