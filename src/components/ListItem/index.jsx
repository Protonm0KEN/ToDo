import React from "react";

import SvgIcons from "./../../assets/icons/SvgIcons";
import styles from  "./ListItem.module.scss";
const ListItem = ({gridToList, todo, removeTodo}) => {
    const {title, content, date, id } = todo;
    return (
        <div className={styles["list"]}>
            <div className={gridToList ? styles["list__wrapper active"] : styles["list__wrapper"]}>
                <h2 className={styles["list__title"]}>{title}</h2>
                <p className={styles["list__date"]}>{date}</p>
            </div>
            <p className={styles["list__description"]}>
                {content}
            </p>
            <div className={styles["list__btns"]}>
                <button className={styles["list__btns-edit"]}>
                    <SvgIcons id="pencil" />
          РЕДАКТИРОВАТЬ
                </button>
                <button onClick={() => removeTodo(id)} className={styles["list__btns-delete"]}>
                    <SvgIcons id="trashcan" />
          УДАЛИТЬ
                </button>
            </div>
        </div>
    );
};

export default ListItem;
