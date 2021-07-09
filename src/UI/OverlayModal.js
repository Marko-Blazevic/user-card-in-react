import errClasses from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const OverlayModal = (props) => {
  return (
    <Card className={errClasses.modal}>
      <header className={errClasses.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={errClasses.content}>
        <p>{props.message}</p>
      </div>
      <footer className={errClasses.actions}>
        <Button onClick={props.errorHandler}>Ok</Button>
      </footer>
    </Card>
  );
};

export default OverlayModal;
