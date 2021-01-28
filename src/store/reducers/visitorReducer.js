const initialState = {
  tickets: [],
  ticketsIsLoading: true,
  ticketsError: null
}

function visitorReducer(state = initialState, action) {
  switch (action.type) {
    case 'visitors/setTickets':
      return { ...state, tickets: action.tickets }
    case 'visitors/setTicketsIsLoading':
      return { ...state, ticketsIsLoading: action.ticketsIsLoading }
    case 'visitors/setTicketsError':
      return { ...state, ticketsError: action.ticketsError }
    default:
      return state;
  }
}

export default visitorReducer;
