import { lazy } from "react";

//product tab
const allProduct=lazy(()=>import('../pages/product/allProduct'))
const product=lazy(()=>import('../pages/product/allProduct/product'))

const categories=lazy(()=>import ('../pages/product/categories'))
const tags=lazy(()=>import ('../pages/product/tags'))
const speciallTags=lazy(()=>import ('../pages/product/speciallTags'))
const orders=lazy(()=>import ('../pages/product/orders'))
const pets=lazy(()=>import ('../pages/product/pets'))

//doctors tab
const doctor_management=lazy(()=>import('../pages/doctors/doctor-management'))
const visits=lazy(()=>import('../pages/doctors/visits'))

//edit tab
const baners=lazy(()=>import('../pages/edit/baners'))
const videos=lazy(()=>import('../pages/edit/videos'))

//comments tab
const products=lazy(()=>import('../pages/comments/products'))
const doctors=lazy(()=>import('../pages/comments/doctors'))

//financial tab
const checkoutRequests=lazy(()=>import('../pages/financial/checkoutReq'))
const gifts=lazy(()=>import('../pages/financial/gifts'))
const transactions=lazy(()=>import('../pages/financial/transactions'))
const discuntCodes=lazy(()=>import('../pages/financial/discuntCodes'))

//customers tab
const vip=lazy(()=>import ('../pages/customer/vip'))
const customers=lazy(()=>import ('../pages/customer/customers'))

//statistics tab
const doctors_statistics=lazy(()=>import('../pages/statistics/doctors'))
const product_statistics=lazy(()=>import ('../pages/statistics/products'))
const total=lazy(()=>import ('../pages/statistics/total'))

//
const messages=lazy(()=>import('../pages/messages'))

//
const aboutUs=lazy(()=>import('../pages/product/allProduct'))

//
const faq=lazy(()=>import('../pages/faq'))

//
const terms=lazy(()=>import('../pages/terms'))

//
const setting=lazy(()=>import('../pages/setting'))

const routes=[
    {path:'/',exact:true,name:'allProduct',component:allProduct},

    {path:'/products-allProduct',exact:true,name:'allProduct',component:allProduct},
    {path:'/products-allProduct-product',exact:true,name:'product',component:product},

    {path:'/products-categories',exact:true,name:'categories',component:categories},
    {path:'/products-tags',exact:true,name:'tags',component:tags},
    {path:'/products-speciallTags',exact:true,name:'speciallTags',component:speciallTags},
    {path:'/products-orders',exact:true,name:'orders',component:orders},
    {path:'/products-pets',exact:true,name:'pets',component:pets},

    {path:'/doctors-doctor_management',exact:true,name:'doctor_management',component:doctor_management},
    {path:'/doctors-visits',exact:true,name:'visits',component:visits},

    {path:'/edit-baners',exact:true,name:'baners',component:baners},
    {path:'/edit-videos',exact:true,name:'videos',component:videos},

    {path:'/comments-products',exact:true,name:'products',component:products},
    {path:'/comments-doctors',exact:true,name:'doctors',component:doctors},

    {path:'/financial-checkoutRequests',exact:true,name:'checkoutRequests',component:checkoutRequests},
    {path:'/financial-gifts',exact:true,name:'gifts',component:gifts},
    {path:'/financial-transactions',exact:true,name:'transactions',component:transactions},
    {path:'/financial-discuntCodes',exact:true,name:'discuntCodes',component:discuntCodes},

    {path:'/customers-vip',exact:true,name:'vip',component:vip},
    {path:'/customers-customers',exact:true,name:'customers',component:customers},

    {path:'/statistics-doctors_statistics',exact:true,name:'doctors_statistics',component:doctors_statistics},
    {path:'/statistics-product_statistics',exact:true,name:'product_statistics',component:product_statistics},
    {path:'/statistics-total',exact:true,name:'total',component:total},


    {path:'/messages',exact:true,name:'messages',component:messages},

    {path:'/aboutUs',exact:true,name:'aboutUs',component:aboutUs},

    {path:'/faq',exact:true,name:'faq',component:faq},

    {path:'/terms',exact:true,name:'terms',component:terms},

    {path:'/setting',exact:true,name:'setting',component:messages},

]

export default routes