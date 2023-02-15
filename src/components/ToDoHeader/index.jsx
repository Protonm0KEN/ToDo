import React, {useState} from "react";

import SvgIcons from "../../assets/icons/SvgIcons";
import ToDoSearch from "../ToDoSearch";

import styles from "./ToDoHeader.module.scss";
const ToDoHeader = ({search, setSearch}) => {
    const [openSearch, setOpenSearch] = useState(false);
    const handleOpenSearch = () => {
        setOpenSearch(true);
    };
    const handleCloseSearch = () => {
        setOpenSearch(false);
        setSearch("");
    };
    const handleBack = () => {
        setOpenSearch(false);
    };
    return (
        openSearch ? <ToDoSearch
            search = {search}
            setSearch = {setSearch}
            handleCloseSearch={handleCloseSearch}
            handleBack = {handleBack}/>
            :
            <div className={styles["todoHeader"]}>
                <h2 className={styles["todoHeader__title"]}>Заметки</h2>
                <div onClick={handleOpenSearch} className={styles["todoHeader__search"]}>
                    <SvgIcons id="search"/>
                </div>
            </div>
    );
};

export default ToDoHeader;
