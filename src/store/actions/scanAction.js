import axios from '../../config/axiosinstance';

export const closeTicket = (ticketData) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.patch("/customer/eventclose", ticketData);
    } catch (error) {
      dispatch({
        type: "scan/setScanError",
        loginError: error.response.data.message
      })
    } finally {
        dispatch({
          type: "scan/setScanIsLoading",
          loginIsLoading: false
        })
    }
  }
}
