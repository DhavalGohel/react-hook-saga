import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROOT_NAMES_AND_SCREEN as Routes } from './enums/routes.enum';

/**
 * @exports
 * @class App
 * @extends {React.Component}
 */
const App: React.FC = () => {
    return (
        <Switch>
            {Routes.map((r, key) => {
                return <Route path={r.path} component={r.component} key={key} exact={r.exact} />;
            })}
        </Switch>
    );
};
export default App;
