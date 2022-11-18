import React from 'react';

export default function SponsorshipInformation(props) {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img style={{paddingLeft: "4%", marginBottom: "10%"}} src="/static/SponsoredByHomefield.png" alt="Sponsor Logo" height="100" width="400" />
                <img style={{paddingLeft: "4%", paddingTop: "0%"}} src="/static/CBBlogo2.png" alt="r/basketball logo" height="115" width="200" />
            </div>
        </>
    )
}