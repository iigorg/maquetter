import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from './Button';
import './Modal.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius:5    
  },
});

class SimpleModal extends React.Component {
  render() {
    const { classes,openModal,closeModal } = this.props;    
    return (
      <div>       
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModal}
          onClose={closeModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h5 className="modalh">
              Congratulations
            </h5>
            <p className="p3">
              You have successfully passed the registration
            </p>
            <div className="modalButton">
              <Button title="OK" btnStyle="text" onClick={closeModal} />       
            </div>    
          </div>
        </Modal>
      </div>
    );
  }
}

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;