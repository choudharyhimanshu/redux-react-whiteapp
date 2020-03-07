import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Loader, Header, Icon, Card } from 'semantic-ui-react';

import { ISearchItem } from '../models/SearchItem';
import { IRootReducerState } from '../store/configureStore';
import SearchForm from './SearchForm';
import SearchCard from './SearchCard';

export interface ISearchPaneViewProps {
    isLoading: boolean;
    errorMessage: string;
    results?: ISearchItem[];
}

function SearchPaneView(props: ISearchPaneViewProps) {
    const { isLoading, errorMessage, results } = props;

    return (
        <Grid divided className="pt-2 pb-2">
            <Grid.Column width={16}>
                <Grid.Row>
                    <SearchForm />
                </Grid.Row>
                <Grid.Row>
                    {isLoading ? (
                        <Loader
                            active
                            inline="centered"
                            className="mt-10 mb-10"
                        >
                            Fetching results
                        </Loader>
                    ) : results ? (
                        results.length === 0 ? (
                            <Header
                                as="h3"
                                textAlign="center"
                                className="mt-10 mb-10"
                            >
                                <Icon name="warning" color="grey" />
                                No results found.
                            </Header>
                        ) : (
                            <Card.Group className="pt-5 pb-5">
                                {results.map(result => (
                                    <SearchCard
                                        key={result.id}
                                        searchItem={result}
                                    />
                                ))}
                            </Card.Group>
                        )
                    ) : (
                        errorMessage && (
                            <Header
                                as="h2"
                                icon
                                textAlign="center"
                                className="mt-10 mb-10"
                            >
                                <Icon name="warning circle" color="grey" />
                                OOPS
                                <Header.Subheader>
                                    Error occurred while fetching results.
                                    <p>{errorMessage}</p>
                                </Header.Subheader>
                            </Header>
                        )
                    )}
                </Grid.Row>
            </Grid.Column>
        </Grid>
    );
}

const mapStateToProps = (state: IRootReducerState) => {
    return { ...state.search };
};

export default connect(mapStateToProps)(SearchPaneView);
