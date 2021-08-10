import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import { Switch } from "react-router-dom";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
// contextAPI
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/signup" component={Signup}>
            <Signup />
          </Route>
          <Route path="/logout" component={Logout}>
            <Logout />
          </Route>
          <Route>
            <Errorpage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
