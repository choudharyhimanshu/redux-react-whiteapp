import * as React from 'react';
import { connect } from 'react-redux';

import { IRootReducerState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import {
    increaseCounter,
    IExampleReducerAction
} from '../actions/example.action';

export interface IExampleComponentProps {
    counter: number;
    handleCounterIncrease: (increaseBy: number) => void;
}

class ExampleComponent extends React.Component<IExampleComponentProps> {
    componentDidMount() {
        setInterval(() => {
            this.props.handleCounterIncrease(1);
        }, 2000);
    }

    render() {
        const { counter } = this.props;

        return <p>Counter: {counter}</p>;
    }
}

const mapStateToProps = (state: IRootReducerState) => {
    return {
        counter: state.example.counter
    };
};

const mapDispatcherToProps = (
    dispatch: ThunkDispatch<IRootReducerState, {}, IExampleReducerAction>
) => {
    return {
        handleCounterIncrease: dispatch(increaseCounter)
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(ExampleComponent);
