export enum EExampleReducerActionType {
    INCREMENT,
    DECREMENT
}

export interface IExampleReducerActionData {
    changeBy: number;
}

export interface IExampleReducerState {
    counter: number;
}

export interface IExampleReducerAction {
    type: EExampleReducerActionType;
    data: IExampleReducerActionData;
}

const defaultState = { counter: 0 };

export default (
    state: IExampleReducerState = defaultState,
    action: IExampleReducerAction
) => {
    switch (action.type) {
        case EExampleReducerActionType.INCREMENT:
            return { ...state, counter: state.counter + action.data.changeBy };
        case EExampleReducerActionType.DECREMENT:
            return { ...state, counter: state.counter - action.data.changeBy };
        default:
            return state;
    }
};
