import { Route, Switch } from 'react-router-dom';

import NotFound from './errors/NotFound'

import Main from './Main';

const Routes = () => (

    <Switch>

        <Route path="/user" component={() => <Main title="User" />} />
        <Route exact path="/" component={() => <Main title="Main" />} />

        <Route path="*" component={NotFound} />

    </Switch>

)

export default Routes;