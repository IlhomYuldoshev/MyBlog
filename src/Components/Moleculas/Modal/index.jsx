import React from 'react';
import Modal from 'react-modal';
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";
import LoginForm from "./LoginForm";
import Button from "../../Atoms/Button";
import RegistrationForm from "./RegistrationForm";
import ModalType from "../../../Constants/ModalTypes";

Modal.setAppElement('#__next')

const MyModal = () => {
  let Component;
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch)
  const modalIsOpen = useContextSelector(ModalContext, v => v.value.isOpen);
  const modalType = useContextSelector(ModalContext, v => v.value.modalType);

  switch (modalType) {
    case ModalType.LOGIN_FORM: {
      Component = LoginForm;
      break;
    }
    case ModalType.REGISTRATION_FORM: {
      Component = RegistrationForm;
      break;
    }
    default: {
      Component = <div/>
    }
  }

  const closeModal = () => mDispatch({type: "CLOSE"})

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{backgroundColor: "#222"}}
    >
      <Component/>
      <Button onClick={closeModal} className="ReactModal__customCloseBtn small-btn">
        X
      </Button>
    </Modal>
  );
};

export default MyModal;
