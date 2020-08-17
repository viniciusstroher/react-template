export const UPDATE_USER = 'UPDATE_USER';

export const CREATE_EVENT = 'CREATE_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const FILTER_EVENT = 'FILTER_EVENT';

const initialUser = {}
export function userReducer(state = initialUser, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}


const initalEventsList = [{id:1, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:2, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:3, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:4, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:5, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:6, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null},
                            {id:7, title:"Evento 1",author:"Girin", created_at:new Date(), due_at:new Date(), banner:null}]

const initialEvents = {events: [...initalEventsList],
                       eventsFilter: [...initalEventsList],
                        filter:'',
                        date:null}

export function eventsReducer(state = initialEvents, action) {
    switch (action.type) {
        case CREATE_EVENT:
            return {...state, ...state.events.push(action.payload.event)}
        case FILTER_EVENT:
            let eventsFilter

            if(!action.payload?.filter || action.payload?.filter === ''){
                eventsFilter = state.events
            }else{
                eventsFilter = state.events.filter(evt =>  evt.title.toLowerCase().indexOf(action.payload.filter.toLowerCase()) !== -1)
            }

            //filtrar data

            return {...state, filter:action.payload.filter, eventsFilter, date: action.payload.date}
        case EDIT_EVENT:
            return {...state, ...state.events,[action.payload.index]:action.payload.event}
        default:
            return state
    }
}