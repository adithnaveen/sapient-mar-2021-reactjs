import React from 'react'

export default function AppFooter({website, year, company}) {

    return (
        <div>
            <hr />
            <p className="app-footer">
                All Rights Reserved <a href={website}>{company}</a>Year {year}
            </p>
        </div>
    );
}

