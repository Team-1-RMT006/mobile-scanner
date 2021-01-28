import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../config/axiosinstance';

export const login = (loginData) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.post("/organizers/login", loginData);
      await AsyncStorage.setItem("access_token", data.access_token);
      dispatch({
        type: "login/setAuthenticated",
        authenticated: true
      })
    } catch (error) {
      dispatch({
        type: "login/setLoginError",
        loginError: error.response.data.message
      })
    } finally {
        dispatch({
          type: "login/setLoginIsLoading",
          loginIsLoading: false
        })
    }
  }
}

export const resetAuthen = () => {
  return (dispatch) => {
    dispatch({
      type: "login/setAuthenticated",
      authenticated: false
    })
  }
}
