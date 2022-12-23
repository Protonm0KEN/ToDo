import React from "react";
import "./ToDoModal.scss";
const ToDoModal = ({
  text,
  title,
  openModal,
  close,
  setTitle,
  content,
  setContent,
  handleBtn,
}) => {
  
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  
  return (
    <div className={openModal ? "modal active" : "modal"}>
      <div className="modal__wrapper">
        <h2 className="modal__title">{text} заметку</h2>
        <form action="input" className="modal__form">
          <div className="modal__group">
            <input type="text" required onChange={onChangeTitle} value={title} />
            <span></span>
            <label>Title</label>
          </div>
          <div className="modal__group">
            <input type="text" required value={content} onChange = {onChangeContent} />
            <span></span>
            <label>Content</label>
          </div>
          <div className="modal__btns">
            <button onClick={close}>Отмена</button>
            <button onClick={handleBtn}>{text}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoModal;
