import errClasses from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={errClasses.backdrop} onClick={props.errorHandler} />;
};

export default Backdrop;
