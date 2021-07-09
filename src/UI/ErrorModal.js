import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import OverlayModal from './OverlayModal';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={props.errorHandler} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          errorHandler={props.errorHandler}
        />,
        document.getElementById('overlay-modal')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
