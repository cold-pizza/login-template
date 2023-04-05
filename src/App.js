import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Login from "./view/login";
import SignUp from "./view/signup";

function App() {
    return (
        <div className="App">
            <h1>로그인 템플릿</h1>
            <Switch>
                <Route exact path="/" render={() => <Login />} />
                <Route path="/sign-up" render={() => <SignUp />} />
            </Switch>
        </div>
    );
}

export default App;
