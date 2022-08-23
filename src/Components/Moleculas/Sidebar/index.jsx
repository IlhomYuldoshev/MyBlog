import React from 'react';
import Button from "../../Atoms/Button";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../Context/ModalContext";

const Sidebar = () => {
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch)

  const openModal = () => {
    mDispatch({type: "OPEN"})
  }

  return (
    <div className="sidebar">
      <Button onClick={openModal} className="btn-outline-secondary">Open Modal</Button>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequatur deleniti et ex expedita illo maiores numquam officiis, perferendis quidem saepe vitae voluptatibus! A consectetur cum, cupiditate ducimus eum facere fugiat inventore laudantium necessitatibus nemo nihil non nulla obcaecati placeat, praesentium quas quisquam similique vitae. Architecto aspernatur autem consectetur consequuntur dolorem dolores doloribus dolorum et ex exercitationem explicabo fugiat illum in ipsa iste laboriosam, minima modi molestias natus nobis nostrum pariatur possimus quis saepe similique sunt tenetur! Accusantium atque laborum quibusdam. Commodi cum ea, excepturi facere itaque minus nesciunt possimus praesentium quaerat reprehenderit repudiandae sed sit suscipit. Eveniet, nostrum.
    </div>
  );
};

export default Sidebar;
