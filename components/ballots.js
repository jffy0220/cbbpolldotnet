import React from 'react';
import { Card, Form, Stack, ListGroup } from 'react-bootstrap';

export default function Ballots(props) {
    const [ officalSearchFilter, setOfficialSearchFilter ] = React.useState('');
    const [ provisionalSearchFilter, setProvisionalSearchFilter ] = React.useState('');
    const [ officialBallots, setOfficialBallots ] = React.useState([
        {
            teamImage: "/static/D1/Alabama.png",
            user: "bbbredy"
        },
        {
            teamImage: "/static/D1/Kentucky.png",
            user: "BluOmega"
        },
        {
            teamImage: "/static/D1/OhioState.png",
            user: "BigBoutros"
        },
        {
            teamImage: "/static/D1/Texas.png",
            user: "Nacos2001"
        },
        {
            teamImage: "/static/D1/Houston.png",
            user: "BRNXB0MBERS"
        },
        {
            teamImage: "/static/D1/Houston.png",
            user: "BRNXB0MBERS"
        },
    ]);
    const [ provisionalBallots, setProvisionalBallots ] = React.useState([
        {
            teamImage: "/static/D1/Alabama.png",
            user: "bbbredy"
        },
        {
            teamImage: "/static/D1/Kentucky.png",
            user: "BluOmega"
        },
        {
            teamImage: "/static/D1/OhioState.png",
            user: "BigBoutros"
        },
        {
            teamImage: "/static/D1/Texas.png",
            user: "Nacos2001"
        },
        {
            teamImage: "/static/D1/Houston.png",
            user: "BRNXB0MBERS"
        }
    ])

    return (
        <>
            <Card>
                <Card.Header as="h5" border="secondary">Official Ballots</Card.Header>
                <Card.Body>
                <Stack gap={2}>
                        <Form>
                            <Form.Control
                                type="text"
                                name="officialBallot"
                                aria-describedby="Search"
                                placeholder="Search User"
                                defaultValue=''
                                onChange={(event) => {
                                    setOfficialSearchFilter(event.target.value);
                                }}
                            />
                        </Form>

                    </Stack>
                    <ListGroup variant="flush">
                        {officialBallots.map((user, i) => {
                            if (user.user.toLowerCase().includes(officalSearchFilter.toLowerCase())) {
                                return (
                                    <ListGroup.Item key={i} action href="#">
                                        <img src={user.teamImage} alt="Team Logo" height="30" width="30" /><span style={{paddingLeft: "10px"}}>{user.user}</span>
                                    </ListGroup.Item>
                                )
                            } else {
                                return;
                            }
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
            <br /><br />
            <Card>
                <Card.Header as="h5" border="secondary">Provisional Ballots</Card.Header>
                <Card.Body>
                    <Stack gap={2}>
                        <Form>
                            <Form.Control
                                type="text"
                                name="provisionalBallot"
                                aria-describedby="Search"
                                placeholder="Search User"
                                defaultValue=''
                                onChange={(event) => {
                                    setProvisionalSearchFilter(event.target.value);
                                }}
                            />
                        </Form>

                    </Stack>
                    <ListGroup variant="flush">
                        {provisionalBallots.map((user, i) => {
                            if (user.user.toLowerCase().includes(provisionalSearchFilter.toLowerCase())) {
                                return (
                                    <ListGroup.Item key={i} action href="#">
                                        <img src={user.teamImage} alt="Team Logo" height="30" width="30" /><span style={{paddingLeft: "10px"}}>{user.user}</span>
                                    </ListGroup.Item>
                                )
                            } else {
                                return;
                            }
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}