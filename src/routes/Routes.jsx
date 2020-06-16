import React from 'react'
import { Route } from 'react-router-dom'
import AddPage from "./AddPage"

function Routes() {
    return (
        <div>
            <Route path="/" exact render={() => <div>Home</div>} />
            <Route path="/add" render={()=><AddPage/>} />
        </div>
    )
}

export default Routes
