import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from '../../route/routes'

function MainContent() {
    console.log(routes, 'routes');

    return (
        <div className='content'>
            <Switch>
                {routes.map((route, idx) =>

                    <Route exact={route.exact} path={route.path} key={idx}>
                        <route.component />
                    </Route>

                )}
            </Switch>
        </div>
    )
}

export default MainContent
