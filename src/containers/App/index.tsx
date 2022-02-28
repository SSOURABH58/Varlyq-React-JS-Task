import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../Page';
import NotFound from '../../components/NotFound';
import appRoutes from './routes';
import './styles.css';

const App: React.FC = () => {
    return (
        <>
            <Switch>
                {Object.entries(appRoutes).map(([key, { path, Component }]) => (
                    <Route
                        key={key}
                        exact
                        path={path}
                        render={() => (
                            <Page>
                                <Component />
                            </Page>
                        )}
                    />
                ))}
                <Route
                    render={() => (
                        <Page>
                            <NotFound />
                        </Page>
                    )}
                />
            </Switch>
        </>
    );
};

export default App;
