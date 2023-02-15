import React from "react";

import SvgIcons from "./../../assets/icons/SvgIcons";
import styles from "./ToDoSearch.module.scss";
const ToDoSearch = ({handleCloseSearch, search, setSearch, handleBack}) => {
    const changeSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className={styles["search"]}>
            <div onClick={handleBack}  className={styles["search__back"]}>
                <SvgIcons id="back"/>
            </div>
            <input  value={search} onChange={changeSearch} type="text" className={styles["search__input"]} placeholder="Поиск..." />
            <div onClick={handleCloseSearch} className={styles["search__close"]}>
                <SvgIcons id="close"></SvgIcons>
            </div>
        </div>
    );
};

export default ToDoSearch;
