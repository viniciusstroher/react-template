export const UPDATE_USER = 'UPDATE_USER';

export const CREATE_EVENT = 'CREATE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';


const initialUser = {}
export function userReducer(state = initialUser, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

const initialEvents = {events:[]}
export function eventsReducer(state = initialEvents, action) {
    switch (action.type) {
        case CREATE_EVENT:
            return {...state, ...state.events.push(action.payload.event)}
        case EDIT_EVENT:
            return {...state, ...state.events,[action.payload.index]:action.payload.event}
        default:
            return state
    }
}