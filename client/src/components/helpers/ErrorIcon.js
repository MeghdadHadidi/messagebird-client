import React from 'react';

const ErrorIcon = ({ title, message, code }) => {
    return (
        <React.Fragment>
            <div class="f-modal-icon f-modal-error animate">
                <span class="f-modal-x-mark"> 
                    <span class="f-modal-line f-modal-left animateXLeft"></span>
                    <span class="f-modal-line f-modal-right animateXRight"></span>
                </span>
                <div class="f-modal-placeholder"></div>
                <div class="f-modal-fix"></div>
            </div>
            <div className="f-modal-icon-text">
                <h5>{ code && `${code}: `}{title}</h5>
                <p>{message}</p>
            </div>
        </React.Fragment>
    );
};

export default ErrorIcon;