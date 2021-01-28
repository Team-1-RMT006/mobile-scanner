const initialState = {
  authenticated: false,
  loginIsLoading: true,
  loginError: null
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'login/setAuthenticated':
      return { ...state, authenticated: action.authenticated }
    case 'login/setLoginIsLoading':
      return { ...state, loginIsLoading: action.loginIsLoading }
    case 'login/setLoginError':
      return { ...state, loginError: action.loginError }
    default:
      return state;
  }
}

export default loginReducer;
