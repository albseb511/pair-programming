import React, { useState } from 'react'

export const AppContext = React.createContext()
function AppProvider(props) {

    const [data, setData] = useState([{
        username: 'albert',
        password: '12345',
        mobile: '1234456775'
    }])

    const addData = (payload) => {
        setData( [...data, payload] )
    }

    return (
        <AppContext.Provider value={ {data, addData} }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
