import { cartActions } from "./cartSlice"
import { uiNotificationAction } from "./uiNotificationSlice"

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://redux-http-c6eb9-default-rtdb.firebaseio.com/cartItem.json')
            const data = await res.json()
            return data
        }
        try {
            const cartData = await fetchHandler()
            //replace the cartData with the data wegot from firebase
            console.log("😀from db:", cartData);
            dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            dispatch(uiNotificationAction.showNotification({
                message: "Could not fetch data, there is no data in DB",
                type:"error",
                open: true
            }))
        }
    }
}

export const sendCartData = (cart) => {
    //Send state as sending request
    return async(dispatch) => {
        dispatch(uiNotificationAction.showNotification({
            message: "Sending Request to DB",
            type: "warning",
            open: true
        }))

        const sendRequest = async() => {
            const res = await fetch('https://redux-http-c6eb9-default-rtdb.firebaseio.com/cartItem.json',{
              method: 'PUT',
              body: JSON.stringify(cart)
            })
            const data = await res.json()

            //data is received, therefore Send state as Request is succesful
            dispatch(uiNotificationAction.showNotification({
              message:"Request Sent Successfully",
              type:"success",
              open: true
            }))
          }    

        try {
            //call the fxn that send/received data to/from firebase
            await sendRequest()
        } catch (error) {
            // Send Error
            dispatch(uiNotificationAction.showNotification({
                message: "Sending Error Request",
                type: "error",
                open: true
            }))
        }
    }
}