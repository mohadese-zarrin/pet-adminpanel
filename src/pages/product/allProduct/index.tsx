import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import CheckBox from '../../../components/checkBox';
import Header from '../../../components/Header';
import SearchBox from '../../../components/searchBox'
const mockData = [
    {
        pet_type: 'cat',
        name: 'غذای گربه',
        stock: 50,
        category: 'food',
        amount: 1000,
        sell:20
    }
]
function ContactList() {
    const history=useHistory()
    console.log('infhfhfhfhfhfh');
    const [selectAll, setSelectAll] = useState(false)
    const [filterMode, setFilterMode] = useState(false)
    useEffect(() => {
        console.log(selectAll, 'selectAll');

    }, [selectAll])
    return (
        <div>
            <Header
                btns={[
                    { lable: 'ایجاد محصول جدید', onPress: () => history.push('products-allProduct-product') }
                ]}
            />
            <div className='main'>
                <SearchBox
                    selected={false}
                    breadcrumb={['مدیریت کاربران', 'مخاطبین']}
                    delete={()=>console.log('delete')}
                    // setFilter={()=>console.log('filter')}
                    setSelectAll={()=>console.log('set select all')}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div>نام محصول</div>
                            </th>
                            <th>
                                <div>{'موجودی(عدد)'}</div>
                            </th>
                            <th>
                                <div>دسته‌بندی</div>
                            </th>
                            <th>
                                <div>نوع حیوان</div>
                            </th>
                            <th>
                                <div>مبلغ</div>
                            </th>
                            <th>
                                <div>میزان فروش(عدد)</div>
                            </th>
                            <th>
                                <div></div>
                            </th>
                        </tr>
                    </thead>
                    {filterMode && <div className='ads'></div>}
                    <tbody>
                        {mockData.map((data, index) =>
                            <tr key={index}>
                                <td>
                                    {/* <Link to="/products-SingleProduct">{data.name}</Link> */}
                                    {/* <div onClick={() => history.push(`/products-SingleProduct/${data.id}`)}>{data.title}</div> */}
                                    <div>{data.name}</div>
                                </td>
                                <td>
                                    <div>{data.stock}</div>
                                </td>
                                <td>
                                    <div>{data.category}</div>
                                </td>
                                <td>
                                    <div>{data.pet_type}</div>
                                </td>
                                <td>
                                    <div>{data.amount}</div>
                                </td>
                                <td>
                                    <div>{data.sell}</div>
                                </td>
                                <td>
                                    <CheckBox setCheck={() => console.log('set check')} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ContactList