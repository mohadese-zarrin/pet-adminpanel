import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import navs from '../../route/navs'

interface SideNavProps {
    nav: string
}

function SideNav() {
    const history = useHistory()
    const [selectedNav, setSelectedNav] = useState('')
    const [selectedChild, setSelectedChild] = useState('')

    useEffect(() => {
        return history.listen(() => {
            if (history.action === 'PUSH') {
                setSelectedChild(history.location.pathname)
                setSelectedNav(history.location.pathname.split('-')[0])

            }
            if (history.action === 'POP') {
                setSelectedChild(history.location.pathname)
                setSelectedNav(history.location.pathname.split('-')[0])
            }
        })
    }, [])
    return (
        <aside>
            <div className='profile'>
                <h2>محسن علوی نسب</h2>
            </div>
            <ul>
                {navs.map((data, index) =>
                    <li key={index} className={`nav-item ${selectedNav == data.tag && 'selected'} `}>
                        <Link to={data.to} className={`nav-item-header`} >
                            <i className={data.icon} />
                            <h3>{data.name}</h3>
                        </Link>
                        {data.children &&
                            <ul className={`nav-children`}>
                                {data.children.map((item, i) =>
                                    <Link  to={item.to} className={`nav-children-item ${selectedNav == data.tag && selectedChild == item.to && 'selected-children'}`} key={i}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                )}
                            </ul>}

                    </li>
                )}
            </ul>
        </aside>
    )
}

export default SideNav
