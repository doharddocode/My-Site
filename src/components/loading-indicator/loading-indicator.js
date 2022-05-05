import React from "react";

import "./loading-indicator.sass"

const LoadingIndicator = () => {
  return (
    <div className="d-flex justify-content-center loading-indicator">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
}

export default LoadingIndicator;