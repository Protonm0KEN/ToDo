import React from "react";

import Button from "../Button";

import SvgIcons from "./../../assets/icons/SvgIcons";
import styles from  "./ToDoNav.module.scss";

const ToDoNav = ({gridToList, setGridToList, handleOpenSearch}) => {
    const toggleGridToList = () => {
        setGridToList(!gridToList);
    };
    return (
        <div className={styles["nav"]}>
            <h2 className={styles["nav__title"]}>Все заметки</h2>
            <Button click={toggleGridToList}>
                <SvgIcons id={gridToList ? "grid" : "list"}/>
                <p className={styles["nav__btn-text"]}>{gridToList?"Сетка" : "Список"}</p>
            </Button>
        </div>
    );
};

export default ToDoNav;
