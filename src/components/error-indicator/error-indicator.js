import React from "react";

const ErrorIndicator = ({ errorMsg }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4>Ошибка!</h4>
      <p>{ errorMsg }</p>
    </div>
  );
}

export default ErrorIndicator