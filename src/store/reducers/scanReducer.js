const initialState = {
  scanIsLoading: true,
  scanError: null,
}

function scanReducer(state = initialState, action) {
  switch (action.type) {
    case 'scan/setScanIsLoading':
      return { ...state, scanIsLoading: action.scanIsLoading }
    case 'scan/setScanError':
      return { ...state, scanError: action.scanError }
    default:
      return state;
  }
}

export default scanReducer;
