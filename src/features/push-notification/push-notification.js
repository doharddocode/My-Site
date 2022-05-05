import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { closeNotification } from "./push-notification-slice"

import "./push-notification.sass"

const PushNotification = () => {
  const {
    pushTitle,
    pushText,
    pushTime,
    isActionSuccess,
    isNotifyVisible
  } = useSelector((state) => state.pushNotification);

  const statusClasses = isActionSuccess ? " success" : " failed";
  const isNotifyShowClass = isNotifyVisible ? " show" : ""
  let [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNotifyVisible) {
      const timeInterval = setInterval(() => setCurrentTime(+new Date() / 60000 - pushTime), 1000)

      return function cleanup() {
        clearInterval(timeInterval);
      }
    }
  });

  return (
    <div
      className={ "toast position-fixed push-notification".concat(isNotifyShowClass) }
      role="alert" aria-live="assertive" aria-atomic="true"
      >
      <div className="toast-header">
        <div className={ "push-status".concat(statusClasses) } />
        <strong className="me-auto">{ pushTitle }</strong>
        <small>{ Math.floor(currentTime) } мин. назад</small>
        <button
          type="button" className="btn-close"
          data-bs-dismiss="toast" aria-label="Закрыть"
          onClick={ () => dispatch(closeNotification()) }
        />
      </div>
      <div className="toast-body">
        { pushText }
      </div>
    </div>
  );
}

export default PushNotification;