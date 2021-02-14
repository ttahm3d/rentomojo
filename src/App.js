import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/Posts/PostDetails/PostDetails";
import { Switch, NavLink, Route, BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.css";

toast.configure();

const App = () => {
  return (
    <BrowserRouter>
      <header className="logo">
        <NavLink to="/">
          <h1>Dummy Blog</h1>
        </NavLink>
      </header>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/users" exact component={Users} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:id" exact component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
