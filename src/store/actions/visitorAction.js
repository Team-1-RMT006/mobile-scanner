import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../config/axiosinstance';

export const fetchEvent = (EventId) => {
  return async (dispatch) => {
    try{
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios.get(`/organizers/events/${EventId}`, { headers: { access_token } })
      const tickets = data.Tickets.filter((ticket) => {
        return ticket.status === "closed";
      })
      console.log('ticket >>>>', tickets)

      dispatch({
        type: "visitors/setTickets",
        tickets
      })
    } catch (error) {
        dispatch({
          type: "visitors/setTicketsError",
          ticketsError: error.response.data.message
        })
    } finally {
        dispatch({
          type: "visitors/setTicketsIsLoading",
          ticketsIsLoading: false
        })
    }
  }
}
