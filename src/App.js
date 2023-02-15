import { useState, useEffect } from "react";

import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ToDoHeader from "./components/ToDoHeader";
import ToDoNav from "./components/ToDoNav";
import "./App.scss";
import SvgIcons from "./assets/icons/SvgIcons";
import ToDoModal from "./components/ToDoModal";


//* Сохранение в Local storage
const getTodos = () => {
    const todos = localStorage.getItem("todos"); //* записываем в переменную todos localStorage в которой будет храниться элемент с ключом todos
    //* Если todos присутствует то мы парсим в json todos
    if (todos) {
        return JSON.parse(todos);
    } else {
        return [];
    }//* если нет то возвращает пустой массив
};
getTodos();
function App() {
    const [gridToList, setGridToList] = useState(false);

    const toggleGridToList = () => {
        setGridToList(!gridToList);
    };

    const [todos, setTodos] = useState(getTodos()); //* Изначальное состояние считается массив т.к мы ретурним []

    const [openModal, setOpenModal] = useState(false);
    //* При встраивании и обновлении компонента срабатывает появление эелмента внутри localStorage todos в ктором JSON превращает в строку массив todos
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    //* Типо componentDidMount
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const [search, setSearch] = useState("");
    const handleAddTodos = (e) => {
        e.preventDefault();
        //* Если title а такде content  присутствует то выполняем операцию создания новой тудушки
        if (title && content) {
            const newTodos = {
                id: Math.random().toString(36).substring(2, 12), //* Превращаем цифры в текст с radix 36 и полем между 2 и 12
                title,
                content,
                date: `${new Date().getDate()}.${
                    new Date().getMonth() + 1
                }.${new Date().getFullYear()}`,
            };
            setTodos([...todos, newTodos]);
            setOpenModal(false);
            setTitle("");
            setContent("");
        }
    };
    const handleRemoveTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ]);
    };
    const handleEditTodo = (id, title, content) => {
        const newTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.title = title;
                todo.content = content;
                todo.date = `${new Date().getDate()}.${
                    new Date().getMonth() + 1
                }.${new Date().getFullYear()}`;
            }
            return todo;
        });
        setTodos(newTodo);
    };
    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    return (
        <div className={"App"}>
            <ToDoHeader search={search} setSearch={setSearch} />
            <div className={"container"}>
                <ToDoNav gridToList={gridToList} setGridToList={setGridToList} />
                <div className={gridToList ? "grid" : ""}>
                    {todos
                        .filter((todo) => {
                            return (
                                todo.title.toLowerCase().includes(search.toLowerCase()) ||
                todo.content.toLowerCase().includes(search.toLowerCase())
                            );
                        })
                        .map((todo) => (
                            <ListItem
                                key={todo.id}
                                gridToList={gridToList}
                                todo={todo}
                                removeTodo={handleRemoveTodo}
                            />
                        ))}
                </div>
            </div>
            <div className={"App-btn"}>
                <Button click={handleOpenModal}>
                    <SvgIcons id="pencil" />
                </Button>
                <ToDoModal
                    openModal={openModal}
                    close={handleCloseModal}
                    text="Добавить"
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    handleBtn={handleAddTodos}
                />
            </div>
        </div>
    );
}

export default App;
