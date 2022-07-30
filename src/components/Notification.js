import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import uiNotificationSlice from '../store/uiNotificationSlice'

const Notification = ({type, message}) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => (state.uiNotification.notification))

    const handleOnClose = () => {
        dispatch(uiNotificationSlice.actions.showNotification({
            open: false
        }))
    }

  return (
    <div>
        {notification.open && <Alert onClose={handleOnClose} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notification