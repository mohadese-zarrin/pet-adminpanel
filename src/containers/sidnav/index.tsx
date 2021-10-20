import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navs from '../../route/navs'
interface SideNavProps {
    nav: string
}

function SideNav() {

    const [selectedNav, setSelectedNav] = useState(0)
    const [selectedChild, setSelectedChild] = useState(0)


    const handleSelectNav = (index: number) => {
        // if(navs[index].children){
        //     return
        // }else{
        //     setSelectedNav(index)
        // }
        setSelectedNav(index)
        setSelectedChild(0)
    }
    console.log(selectedNav, 'hdshdhdh');

    return (
        <aside>
            <div className='profile'>
                <h2>محسن علوی نسب</h2>
            </div>
            <ul>
                {navs.map((data, index) =>
                    <li key={index} className={`nav-item ${selectedNav == index && 'selected'} `}>
                        <Link onClick={() => handleSelectNav(index)} to={data.to} className={`nav-item-header ${index==selectedNav-1&& 'nav-border'}`} >
                            <i className={data.icon} />
                            <h3>{data.name}</h3>
                        </Link>
                        {data.children &&
                            <ul className={`nav-children`}>
                                {data.children.map((item, i) =>
                                    <Link onClick={() => setSelectedChild(i)} to={item.to} className={`nav-children-item ${selectedNav == index && selectedChild == i && 'selected-children'}`} key={i}>
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
