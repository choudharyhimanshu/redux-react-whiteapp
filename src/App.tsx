import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TOAST_CONFIG } from './constants';
import ExampleContainer from './containers/ExampleContainer';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/common/Navbar';

import './css/helper.css';

class App extends React.Component<{}> {
    constructor(props: {}) {
        super(props);

        toast.configure(TOAST_CONFIG);
    }

    componentDidMount() {
        toast.info('Welcome to FOOBAR!');
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/example" component={ExampleContainer} />

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
