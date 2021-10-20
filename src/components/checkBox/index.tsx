import React, { useState, useEffect, useRef } from 'react'

interface checkboxProps{
    checked?:boolean
    setCheck:()=>void
}
function CheckBox(props:checkboxProps) {

    const [checked, setChecked] = useState(props.checked)
    const checkboxRef = useRef<HTMLInputElement>(null);
    console.log(checkboxRef, 'checkboxRef');


    const handleCheck = () => {
        setChecked(!checked)
        props.setCheck()
    }
    useEffect(() => {
        console.log(checked, 'checked');
    }, [checked])
    return (
        <div className={`checkbox ${checked&&'checked'}`} onClick={() => checkboxRef.current?.click()}>
           {checked&& <i className="tick checbox-tick" />}
            <input type="checkbox" name="checkbox" ref={checkboxRef} onChange={() => handleCheck()} />
        </div>
    )
}

export default CheckBox
