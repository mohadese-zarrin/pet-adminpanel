import React, { useState, useEffect, useRef } from 'react'

interface switchProps{
    status:boolean
    setSwitch?:()=>void
}
function SwitchBtn(props:switchProps) {

    const [status, setStatus] = useState(props.status)


    const handleSwitch = () => {
        // setStatus(!status)
        // props.setCheck()
    }
    // useEffect(() => {
    //     console.log(status, 'status in jjjjjjjj');
    // }, [props.status])
    return (
        <div className={`switch ${status&&'on'}`} onClick={() =>setStatus(!status)}>
           <div className={`indicator  ${status?'toggleOn':'toggleOff'}`}></div>
        </div>
    )
}

export default SwitchBtn
