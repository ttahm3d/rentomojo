import { useState } from "react";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/Posts/PostDetails/PostDetails";
import { Switch, NavLink, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { darkTheme, lightTheme, GlobalStyle } from "./theme";
import { toast } from "react-toastify";
import "./App.css";

toast.configure();

const App = () => {
  const [theme, settheme] = useState("light");
  const toggleTheme = () => {
    theme === "lightTheme" ? settheme("darkTheme") : settheme("lightTheme");
  };

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <header className="logo">
          <NavLink to="/">
            <h1>Dummy Blog</h1>
          </NavLink>
          <button className="toggle" onClick={() => toggleTheme()}>
            {theme === "lightTheme" ? (
              <FaMoon style={{ color: "#D5D8DC" }} />
            ) : (
              <FaSun style={{ color: "#f1c40f" }} />
            )}
          </button>
        </header>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/users" exact component={Users} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id" exact component={PostDetails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
