import React from 'react'
import Header from '../../components/Header'

function Home() {
    return (
        <div>
            <Header
                btns={[
                    { lable: 'btn1', onPress: () => console.log('btn 1') },
                    { lable: 'btn2', onPress: () => console.log('btn 2') }
                ]}
                tabs={[
                    { lable: 'tab 121', onPress: (a) => console.log(a) },
                    { lable: 'tab 222', onPress: (a) => console.log(a) }
                ]}
            />
        </div>
    )
}

export default Home
