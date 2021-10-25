import React ,{useState}from 'react'
import Header from '../../../components/Header'
import RadioBottun from '../../../components/radioBottun'
import SwitchBtn from '../../../components/switchBtn'

function Product() {
    const [status, setStatus] = useState(false)
    return (
        <div>
            <Header
                btns={[
                    { lable: 'اعمال', onPress: () => console.log('اعمال') },
                    { lable: 'انصراف', onPress: () => console.log('انصراف') }
                ]}
            />
            <div className='main'>
                <h4 className='color-text'>ایجاد محصول جدید</h4>
                <div className='product-section'>
                    <h3>اطلاعات</h3>
                    <div className='input-container'>
                        <div className='input-lable'><h5>نام محصول</h5></div>
                        <input className='input' />
                    </div>
                    <div className='input-container'>
                        <div className='input-lable'><h5>توضیحات</h5></div>
                        <input className='input desc' />
                    </div>
                    <div className='row-input'>
                        <div className='__row-input'>
                            <div className='input-container'>
                                <div className='input-lable'><h5>وزن</h5></div>
                                <input className='input' />
                            </div>
                            <div >
                                <input type="radio" checked={true} name="radio"/>
                                <input type="radio" checked={true} name="radio"/>
                            </div>
                        </div>
                        <div className='__row-input'>
                            <div className='input-container'>
                                <div className='input-lable'><h5>موجودی</h5></div>
                                <input className='input' />
                            </div>
                        </div>
                    </div>
                    <RadioBottun lable='lable' checked={false} setCheck={()=>console.log('hdhd')}/>
                    <SwitchBtn status={status}/>
                </div>
            </div>
        </div>
    )
}

export default Product
