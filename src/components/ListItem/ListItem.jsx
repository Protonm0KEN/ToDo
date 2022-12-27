import React from "react";
import SvgIcons from "./../../assets/icons/SvgIcons";
import "./ListItem.scss";
const ListItem = ({gridToList, todo, removeTodo}) => {
  const {title, content, date, id } = todo
  return (
    <div className="list">
      <div className={gridToList ? 'list__wrapper active' : 'list__wrapper'}>
        <h2 className="list__title">{title}</h2>
        <p className="list__date">{date}</p>
      </div>
      <p className="list__description">
        {content}
      </p>
      <div className="list__btns">
        <button className="list__btns-edit">
          <SvgIcons id="pencil" />
          РЕДАКТИРОВАТЬ
        </button>
        <button onClick={() => removeTodo(id)} className="list__btns-delete">
          <SvgIcons id="trashcan" />
          УДАЛИТЬ
        </button>
      </div>
    </div>
  );
};

export default ListItem;
