import * as React from 'react';
import { connect } from 'react-redux';

import store, { IRootReducerState } from '../configureStore';
import { EExampleReducerActionType } from '../reducers/example.reducer';

export interface IExampleComponentProps {
    counter: number;
}

class ExampleComponent extends React.Component<IExampleComponentProps> {
    componentDidMount() {
        setInterval(() => {
            store.dispatch({
                type: EExampleReducerActionType.INCREMENT,
                data: {
                    changeBy: 1
                }
            });
        }, 1000);
    }

    render() {
        const { counter } = this.props;

        return <p>Counter: {counter}</p>;
    }
}

const mapStateToProps = (state: IRootReducerState): IExampleComponentProps => {
    return {
        counter: state.example.counter
    };
};

export default connect(mapStateToProps)(ExampleComponent);
