import React, { useState, useEffect } from 'react'

interface Tab {
    lable: string;
    onPress: (a: number) => void
}

interface headerProps {
    btns?: any[]
    tabs?: Tab[]
}
function Header(props: headerProps) {
    const [selectedTab, setSelectedTab] = useState(0)
    useEffect(() => {
       if(props.tabs){
        props.tabs[selectedTab].onPress(selectedTab)
       }
    }, [selectedTab])
    return (
        <div className='header'>
            <div className='header-section'>
                {props.tabs && props.tabs.map((tab, index) =>
                    <div onClick={() => setSelectedTab(index)} className={`tab ${selectedTab == index && 'selected'}`}>
                        <h4>{tab.lable}</h4>
                    </div>
                )}
            </div>
            <div className='header-section left'>
                {props.btns && props.btns.map((btn, index) =>
                    <div onClick={btn.onPress} className={`btn ${index == 1 && 'fill'}`}>{btn.lable}</div>
                )}
                <div className='rotate '><i className="logout logout-custom" /></div>
            </div>
        </div>
    )
}

export default Header