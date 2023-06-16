import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

//pages
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

//components
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="todo">Todo</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="login">{login ? login : "Login"}</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="posts" element={<PostsPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
