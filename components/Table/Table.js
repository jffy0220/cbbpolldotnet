import React from 'react';
import { Table } from 'react-bootstrap';

const testData = [
    {
        teamName: "Houston Cougars",
        rank: 1,
        logo: "static/D1/Houston.png",
        firstPlaceVotes: 44,
        points: 2774
    },
    {
        teamName: "Gonzaga Bulldogs",
        rank: 2,
        logo: "static/D1/Gonzaga.png",
        firstPlaceVotes: 29,
        points: 2564
    },
    {
        teamName: "Kentucky Wildcats",
        rank: 3,
        logo: "static/D1/Kentucky.png",
        firstPlaceVotes: 13,
        points: 2639
    },
    {
        teamName: "North Carolina Tar Heels",
        rank: 4,
        logo: "static/D1/NorthCarolina.png",
        firstPlaceVotes: 26,
        points: 2624
    },
    {
        teamName: "Baylor Bears",
        rank: 5,
        logo: "static/D1/Baylor.png",
        firstPlaceVotes: 3,
        points: 2493
    },
    {
        teamName: "Kansas Jayhawks",
        rank: 6,
        logo: "static/D1/Kansas.png",
        firstPlaceVotes: 2,
        points: 2363
    },
    {
        teamName: "Duke Blue Devils",
        rank: 7,
        logo: "static/D1/Duke.png",
        firstPlaceVotes: '',
        points: 2182
    },
    {
        teamName: "UCLA Bruins",
        rank: 8,
        logo: "static/D1/UCLA.png",
        firstPlaceVotes: '',
        points: 2066
    },
    {
        teamName: "Arkansas Razorbacks",
        rank: 9,
        logo: "static/D1/Arkansas.png",
        firstPlaceVotes: '',
        points: 1860
    },
    {
        teamName: "Texas Longhorns",
        rank: 10,
        logo: "static/D1/Texas.png",
        firstPlaceVotes: 1,
        points: 1833
    },
    {
        teamName: "Creighton Bluejays",
        rank: 11,
        logo: "static/D1/Creighton.png",
        firstPlaceVotes: '',
        points: 1601
    },
    {
        teamName: "Arizona Wildcats",
        rank: 12,
        logo: "static/D1/Arizona.png",
        firstPlaceVotes: '',
        points: 1515
    },
    {
        teamName: "Indiana Hoosiers",
        rank: 13,
        logo: "static/D1/Indiana.png",
        firstPlaceVotes: '',
        points: 1486
    },
    {
        teamName: "Auburn Tigers",
        rank: 14,
        logo: "static/D1/Auburn.png",
        firstPlaceVotes: '',
        points: 1132
    },
    {
        teamName: "Virginia Cavaliers",
        rank: 15,
        logo: "static/D1/Virginia.png",
        firstPlaceVotes: '',
        points: 1016
    },
    {
        teamName: "San Diego State Aztecs",
        rank: 16,
        logo: "static/D1/SanDiego.png",
        firstPlaceVotes: '',
        points: 1013
    },
    {
        teamName: "Alabama Crimson Tide",
        rank: 17,
        logo: "static/D1/Alabama.png",
        firstPlaceVotes: 1,
        points: 1005
    },
    {
        teamName: "Texas Tech Red Raiders",
        rank: 18,
        logo: "static/D1/TexasTech.png",
        firstPlaceVotes: '',
        points: 638
    },
    {
        teamName: "TCU Horned Frogs",
        rank: 19,
        logo: "static/D1/TCU.png",
        firstPlaceVotes: '',
        points: 629
    },
    {
        teamName: "Tennessee Volunteers",
        rank: 20,
        logo: "static/D1/Tennessee.png",
        firstPlaceVotes: '',
        points: 618
    },
    {
        teamName: "Illinois Fighting Illini",
        rank: 21,
        logo: "static/D1/Illinois.png",
        firstPlaceVotes: '',
        points: 614
    },
    {
        teamName: "Dayton Flyers",
        rank: 22,
        logo: "static/D1/Dayton.png",
        firstPlaceVotes: '',
        points: 585
    },
    {
        teamName: "Michigan Wolverines",
        rank: 23,
        logo: "static/D1/Michigan.png",
        firstPlaceVotes: '',
        points: 399
    },
    {
        teamName: "Uconn Huskies",
        rank: 24,
        logo: "static/D1/Uconn.png",
        firstPlaceVotes: '',
        points: 378
    },
    {
        teamName: "Michigan State Spartans",
        rank: 25,
        logo: "static/D1/MichiganState.png",
        firstPlaceVotes: '',
        points: 318
    },
]

const otherReceivingVotes = [
    {
        team: "Texas A&M",
        votes: 287
    },
    {
        team: "Purdue",
        votes: 285
    },
    {
        team: "Saint Mary's",
        votes: 251
    },
    {
        team: "Iowa",
        votes: 181
    },
    {
        team: "Xavier",
        votes: 148
    },
    {
        team: "Virginia Tech",
        votes: 138
    },
    {
        team: "Miami (FL)",
        votes: 122
    },
    {
        team: "Villanova",
        votes: 119
    },
    {
        team: "Saint Louis",
        votes: 92
    },
    {
        team: "Wisconsin",
        votes: 74
    },
    {
        team: "Ohio State",
        votes: 67
    },
    {
        team: "Memphis",
        votes: 50
    },
    {
        team: "Florida",
        votes: 41
    },
    {
        team: "James Madison",
        votes: 40
    },
]

export default function TableBody(props) {
   return (
        <>
            <Table striped bordered variant='light'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team(First Place Votes)</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((team, i) => {
                        return (
                            <tr key={i}>
                                <td>{team.rank}</td>
                                <td>
                                    <img src={team.logo} height="30" width="30" alt={team.teamName} /> 
                                    <span style={{paddingLeft: "5px"}}>{team.teamName}</span>
                                    { team.firstPlaceVotes > 0 ? `(${team.firstPlaceVotes})` : ''}
                                </td>
                                <td>{team.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <p>
                Other Receiving Votes:
                {otherReceivingVotes.map((team, i) => {
                    return ` ${team.team} ${team.votes}, `;
                })}
            </p>
        </>
   )
}