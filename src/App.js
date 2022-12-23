import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoNav from "./components/ToDoNav/ToDoNav";
import "./App.scss";
import SvgIcons from "./assets/icons/SvgIcons";
import ToDoModal from "./components/ToDoModal/ToDoModal";

function App() {
  const [gridToList, setGridToList] = useState(false);

  const toggleGridToList = () => {
    setGridToList(!gridToList);
  };

  const [todos, setTodos] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [ search , setSearch ] = useState('')
  console.log(todos);
  const handleAddTodos = (e) => {
    e.preventDefault();
    if (title && content) {
      const newTodos = {
        id: Math.random().toString(36).substring(2, 12),
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

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  return (
    <div className="App">
      <ToDoHeader search={search} setSearch={setSearch} />
      <div className="container">
        <ToDoNav gridToList={gridToList} setGridToList={setGridToList} />
        <div className={gridToList ? "grid" : ""}>
          {todos.map((todo) => (
            <ListItem key={todo.id} gridToList={gridToList} todo={todo} />
          ))}
        </div>
      </div>
      <div className="App-btn">
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
