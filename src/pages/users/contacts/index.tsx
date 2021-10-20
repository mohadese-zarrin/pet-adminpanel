import React, { useState, useEffect } from 'react'
import CheckBox from '../../../components/checkBox';
import Header from '../../../components/Header';
import SearchBox from '../../../components/searchBox'
const mockData = [
    {
        mobile: '0123456789',
        name: 'user name',
        date: '2022-12-02',
        credit: 1000,
        status: false
    },
    {
        mobile: '0123456789',
        name: 'user name',
        date: '2022-12-02',
        credit: 1000,
        status: false
    },
    {
        mobile: '0123456789',
        name: 'user name',
        date: '2022-12-02',
        credit: 1000,
        status: false
    },
]
function ContactList() {
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
                    { lable: 'ایجاد مخاطب', onPress: () => console.log('ایجاد مخاطب') }
                ]}
            />
            <div className='main'>
                <SearchBox
                    selected={false}
                    breadcrumb={['مدیریت کاربران', 'مخاطبین']}
                    delete={()=>console.log('delete')}
                    setFilter={()=>console.log('filter')}
                    setSelectAll={()=>console.log('set select all')}
                />
                {/* ContactList */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div>شماره موبایل</div>
                            </th>
                            <th>
                                <div>نام و نام خانوادگی</div>
                            </th>
                            <th>
                                <div>تاریخ عضویت</div>
                            </th>
                            <th>
                                <div>اعتبار</div>
                            </th>
                            <th>
                                <div>وضعیت</div>
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
                                    <div>{data.mobile}</div>
                                </td>
                                <td>
                                    <div>{data.name}</div>
                                </td>
                                <td>
                                    <div>{data.date}</div>
                                </td>
                                <td>
                                    <div>{data.credit}</div>
                                </td>
                                <td>
                                    <div>{data.status ? 'فعال' : 'غیر فعال'}</div>
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
