import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../config/axiosinstance';

export const fetchEvents = () => {
  return async (dispatch) => {
    try{
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.get("/organizers/events", { headers: { access_token } })
      dispatch({
        type: "home/setEvents",
        events: data
      })
    } catch (error) {
        dispatch({
          type: "home/setEventsError",
          eventsError: error.response.data.message
        })
    } finally {
        dispatch({
          type: "home/setEventsIsLoading",
          eventsIsLoading: false
        })
    }
  }
}

export const setEventId = (EventId) => {
  return (dispatch) => {
    dispatch({
      type: "home/setEventId",
      EventId
    })
  }
}
