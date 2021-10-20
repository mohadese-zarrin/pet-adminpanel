import React, { useState, useEffect, useRef } from 'react'

interface switchProps {
    // status?: boolean
    // setSwitch?: () => void
}
function ProgressBar(props: switchProps) {
    // const [newPos, setNewPos] = useState(0)
    const min = 1000
    const max = 15000
    const diferenc = max - min
    const ave = 300 / diferenc
    console.log(ave, diferenc, 'aev');


    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(300)


    // const [status, setStatus] = useState(props.status)
    // const checkboxRef = useRef<HTMLInputElement>(null);
    // console.log(checkboxRef, 'checkboxRef');


    const getMousePosition = (event: any) => {
        console.log(event, 'event');

    }



    function dragLeftElement(e: any) {
        var newPos = 0, prevPos = 0;
        let element = document.getElementById('left-indicator') as HTMLInputElement;
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        prevPos = e.clientX;
        // pos4 = e.clientY;
        element.onmouseup = closeDragElement;
        element.onmousemove = elementDrag;
        function elementDrag(e: any) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            newPos = prevPos - e.clientX;
            // pos2 = pos4 - e.clientY;
            prevPos = e.clientX;
            // pos4 = e.clientY;
            // set the element's new position:
            // element.style.top = (element.offsetTop - pos2) + "px";
            if ((element.offsetLeft - newPos) > 0) {
                element.style.left = (element.offsetLeft - newPos) + "px";
                setLeft(element.offsetLeft - newPos)
            } else { closeDragElement() }
        }
        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            element.onmouseup = null;
            element.onmousemove = null;
        }

    }

    function dragRightElement(e: any) {
        var newPos = 0, prevPos = 0;
        let element = document.getElementById('right-indicator') as HTMLInputElement;
        e = e || window.event;
        e.preventDefault();
        prevPos = e.clientX;
        element.onmouseup = closeDragElement;
        element.onmousemove = elementDrag;
        function elementDrag(e: any) {
            e = e || window.event;
            e.preventDefault();
            newPos = prevPos - e.clientX;
            prevPos = e.clientX;
            if ((element.offsetLeft - newPos) < 301 && (element.offsetLeft - newPos) > left) {
                element.style.left = (element.offsetLeft - newPos) + "px";
                setRight(element.offsetLeft - newPos)
            } else { closeDragElement() }
        }
        function closeDragElement() {
            element.onmouseup = null;
            element.onmousemove = null;
        }

    }
    useEffect(() => {
        // console.log(left, right, 'value');
        let element = document.getElementById('progressBar-fill') as HTMLInputElement;
        element.style.width = (right - left) + "px";
        element.style.left = (left + 12) + "px";
        if (left < 0) {
            setLeft(0)
        }
    }, [left])
    useEffect(() => {
        let element = document.getElementById('progressBar-fill') as HTMLInputElement;
        element.style.width = (right - left) + "px";
        console.log(right, 'right');
        if (right > 300) {
            setRight(300)
        }
    }, [right])

    return (
        <div className='progressBar-container'>
            <div className='lable'>
                <h4>قیمت:</h4>
            </div>
            <div>
                <div className='info'>
                    <h4>از</h4>
                    <div>
                        <h4>{Math.ceil(left / ave)+ min}</h4>
                    </div>
                    <h4>تا</h4>
                    <div className='input small'>
                        <h4>{`${Math.floor(right / ave) + min}`}</h4>
                    </div>
                </div>
                <div className={`progressBar`}>
                    <div className='progressBar-indicator' id='left-indicator' onMouseDown={dragLeftElement}></div>
                    <div className='progressBar-indicator' id='right-indicator' onMouseDown={dragRightElement}></div>
                    <div className='progressBar-fill-container'>
                        <div id='progressBar-fill'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProgressBar
