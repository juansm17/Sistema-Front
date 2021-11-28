import { Switch, Route, Redirect } from "react-router";
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';

export const AuthRoute = () =>{
    return (
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
    );
}