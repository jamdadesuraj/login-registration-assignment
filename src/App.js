import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./components/Authentication/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoutes exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
