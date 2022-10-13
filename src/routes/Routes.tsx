import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import AddEdit from "../pages/AddEdit";

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id?" component={Detail} />
        <Route path="/add-edit/:id?" component={AddEdit} />
    </Switch>
  </BrowserRouter>
);

export default Routes;