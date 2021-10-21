import React,{useState} from 'react'
import SwitchBtn from '../../../components/switchBtn'
import ProgressBar from '../../../components/progressBar';

function ChannelList() {
    const [status, setStatus] = useState(false)
    console.log(status,'status in channels');
    
    return (
        <div>
            <div className='main'>
                {/* FIXME : responsive state */}
                {/* <SwitchBtn status={status}/>*/}
                <ProgressBar/>
            </div>
            {/* <div onClick={()=>setStatus(!status)}>channels</div> */}
        </div>
    )
}

export default ChannelList
