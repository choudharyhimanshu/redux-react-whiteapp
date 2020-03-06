import * as React from 'react';
import { connect } from 'react-redux';
import { Statistic } from 'semantic-ui-react';
import { ThunkDispatch } from 'redux-thunk';

import { IRootReducerState } from '../store/configureStore';
import {
    increaseCounter,
    IExampleReducerAction
} from '../actions/example.action';

export interface IExampleComponentProps {
    counter: number;
    handleCounterIncrement: (increaseBy: number) => void;
}

class ExampleComponent extends React.Component<IExampleComponentProps> {
    private counterSubscription: NodeJS.Timeout | undefined;

    componentDidMount() {
        this.counterSubscription = setInterval(() => {
            this.props.handleCounterIncrement(1);
        }, 2000);
    }

    componentWillUnmount() {
        if (this.counterSubscription) {
            clearInterval(this.counterSubscription);
        }
    }

    render() {
        const { counter } = this.props;

        return (
            <Statistic>
                <Statistic.Value>{counter}</Statistic.Value>
                <Statistic.Label>Counts</Statistic.Label>
            </Statistic>
        );
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
        handleCounterIncrement: dispatch(increaseCounter)
    };
};

export default connect(mapStateToProps, mapDispatcherToProps)(ExampleComponent);
