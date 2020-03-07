import * as React from 'react';
import { Card } from 'semantic-ui-react';

import { ISearchItem } from '../models/SearchItem';

export interface ISearchCardProps {
    searchItem: ISearchItem;
}

function SearchCard(props: ISearchCardProps) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.searchItem.name}</Card.Header>
                <Card.Meta>A sub title</Card.Meta>
                <Card.Description>Here goes some Description</Card.Description>
            </Card.Content>
            <Card.Content extra>Extra Content</Card.Content>
        </Card>
    );
}

export default SearchCard;
