import {
    IExampleReducerAction,
    EExampleReducerActionType
} from '../actions/example.action';

export interface IExampleReducerState {
    counter: number;
}

const defaultState = { counter: 0 };

export default (
    state: IExampleReducerState = defaultState,
    action: IExampleReducerAction
) => {
    if (action.data) {
        switch (action.type) {
            case EExampleReducerActionType.INCREMENT:
                return {
                    ...state,
                    counter: state.counter + action.data.changeBy
                };
            case EExampleReducerActionType.DECREMENT:
                return {
                    ...state,
                    counter: state.counter - action.data.changeBy
                };
            default:
                return state;
        }
    } else {
        return state;
    }
};
