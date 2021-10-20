import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams, useLocation } from "react-router-dom";
import CheckBox from '../checkBox'

interface searchBoxProps{
    selected?:boolean
    setSelectAll?:()=>void
    setFilter?:()=>void
    delete?:()=>void
    breadcrumb:any[]
}

function SearchBox(props:searchBoxProps) {
    return (
        <div className='searchBox'>
            <div className='searchBox-section'>
                <div className='breadcrumb'>
                    <i className='search' />
                    <h2 className='breadcrumb-text'>{`${props.breadcrumb[0]}  > ${props.breadcrumb[1]}`}</h2>
                </div>
            </div>
            <div className='searchBox-section left'>
                {props.setFilter&&<div onClick={props.setFilter} className='row selection-view'>
                    <h2>فیلتر نتایج</h2>
                    <i className='filter' />
                </div>}
                {props.setSelectAll&&<div className='row selection-view'>
                    <h2>انتخاب همه</h2>
                    <CheckBox checked={props.selected} setCheck={props.setSelectAll}/>
                </div>}
               {props.delete&& <div onClick={props.delete} className='row selection-view delete'>
                    <h2>حذف موارد انتخاب شده</h2>
                    <i className='remove' />
                </div>}
            </div>
        </div>
    )
}

export default SearchBox