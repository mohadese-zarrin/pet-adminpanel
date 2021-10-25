import React, { useState, useEffect, useRef } from 'react'

interface radioBottunProps {
    checked: boolean
    setCheck: () => void
    lable:string
}
function RadioBottun(props: radioBottunProps) {

    const [checked, setChecked] = useState(props.checked)
    const radioBottunRef = useRef<HTMLInputElement>(null);
    console.log(radioBottunRef, 'radioBottunRef');


    const handleCheck = () => {
        console.log('ding');

        setChecked(!checked)
        props.setCheck()
    }
    useEffect(() => {
        console.log(checked, 'checked');
    }, [checked])
    return (
        <div className='radiobutton-container'>
            <div className={`radiobottun ${checked && 'checked'}`} onClick={() => handleCheck()}>
                {checked && <div id='radiobottun-check'></div>}
            </div>
            <h5>{props.lable}</h5>
        </div>

    )
}

export default RadioBottun
