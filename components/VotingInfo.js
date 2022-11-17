import React from 'react';
import { Card, Button } from 'react-bootstrap';

// Need to look into proper sizing for the card

export default function VotingInformation(props) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title><h2>Vote!</h2></Card.Title>
                    <Card.Text><h5>Voting Opens at 10:00 AM EST every Saturday</h5></Card.Text>
                    <Card.Text>
                        <Button variant="primary">Sign In With Reddit</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}