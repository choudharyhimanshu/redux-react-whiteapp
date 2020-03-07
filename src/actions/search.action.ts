import { Dispatch } from 'react';

import { ISearchRequest } from '../models/SearchRequest';
import { ISearchItem } from '../models/SearchItem';

export enum ESearchActionType {
    FETCHING = 'SEARCH_FETCHING',
    SUCCESS = 'SEARCH_SUCCESS',
    ERROR = 'SEARCH_ERROR'
}

export interface ISearchActionData {
    searchResults: ISearchItem[];
    errorMessage: string;
}

export interface ISearchAction {
    type: ESearchActionType;
    data: ISearchActionData;
}

export const fetchItems = (dispatch: Dispatch<ISearchAction>) => {
    return async (searchRequest: ISearchRequest) => {
        dispatch({
            type: ESearchActionType.FETCHING,
            data: { searchResults: [], errorMessage: '' }
        });
        setTimeout(
            () =>
                dispatch({
                    type: ESearchActionType.SUCCESS,
                    data: {
                        searchResults: [
                            { id: '123', name: 'foobar', tags: [] }
                        ],
                        errorMessage: 'buyaka'
                    }
                }),
            1000
        );
    };
};
