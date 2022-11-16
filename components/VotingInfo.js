import React from 'react';
import { Card, Button } from 'react-bootstrap';

// Need to look into proper sizing for the card

export default function VotingInformation(props) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="/static/CBBlogo2.png" width="50" height="400" alt="r/CollegeBasketball Logo" />
                <Card.Body>
                    <Card.Title>Vote!</Card.Title>
                    <Card.Text>Voting Opens at 10:00 AM EST every Saturday</Card.Text>
                    <Card.Text>
                        <Button variant="primary">Sign In With Reddit</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}