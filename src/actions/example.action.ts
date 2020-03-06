import { Dispatch } from 'react';

export enum EExampleReducerActionType {
    INCREMENT = 'EXAMPLE_INCREMENT',
    DECREMENT = 'EXAMPLE_DECREMENT',
    PROCESSING = 'EXAMPLE_PROCESSING'
}

export interface IExampleReducerActionData {
    changeBy: number;
}

export interface IExampleReducerAction {
    type: EExampleReducerActionType;
    data?: IExampleReducerActionData;
}

export const increaseCounter = (dispatch: Dispatch<IExampleReducerAction>) => {
    return async (increaseBy: number) => {
        dispatch({ type: EExampleReducerActionType.PROCESSING });
        setTimeout(
            () =>
                dispatch({
                    type: EExampleReducerActionType.INCREMENT,
                    data: { changeBy: increaseBy }
                }),
            1000
        );
    };
};
