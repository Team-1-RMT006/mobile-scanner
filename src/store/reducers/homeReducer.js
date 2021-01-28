const initialState = {
  events: [],
  eventsIsLoading: true,
  eventsError: null,
  EventId: null
}

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'home/setEvents':
      return { ...state, events: action.events }
    case 'home/setEventsIsLoading':
      return { ...state, eventsIsLoading: action.eventsIsLoading }
    case 'home/setEventsError':
      return { ...state, eventsError: action.eventsError }
    case 'home/setEventId':
      return { ...state, EventId: action.EventId }     
  default:
      return state;
  }
}

export default homeReducer;
