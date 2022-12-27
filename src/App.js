import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoNav from "./components/ToDoNav/ToDoNav";
import "./App.scss";
import SvgIcons from "./assets/icons/SvgIcons";
import ToDoModal from "./components/ToDoModal/ToDoModal";

const getTodos = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};
getTodos();
function App() {
  const [gridToList, setGridToList] = useState(false);

  const toggleGridToList = () => {
    setGridToList(!gridToList);
  };

  const [todos, setTodos] = useState(getTodos());

  const [openModal, setOpenModal] = useState(false);
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
      return todo
    });
    setTodos(newTodo)
  };
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  return (
    <div className="App">
      <ToDoHeader search={search} setSearch={setSearch} />
      <div className="container">
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
