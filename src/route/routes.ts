import { lazy } from "react";

//home tab
const home=lazy(()=>import('../pages/home'))
//user tab
const contacts=lazy(()=>import ('../pages/users/contacts'))
const channels=lazy(()=>import ('../pages/users/channels'))
//content tab
const ads=lazy(()=>import('../pages/content/ads'))
const adsCategory=lazy(()=>import('../pages/content/adsCategory'))
const adsTags=lazy(()=>import('../pages/content/adsTags'))
const tisers=lazy(()=>import('../pages/content/tisers'))
const tisersCategory=lazy(()=>import('../pages/content/tisersCategory'))
const slideshow=lazy(()=>import('../pages/content/slideshow'))
//special tab
const presents=lazy(()=>import('../pages/special/presents'))
const lotteries=lazy(()=>import('../pages/special/lotteries'))
const roundOfLuck=lazy(()=>import('../pages/special/roundOfLuck'))
const coupons=lazy(()=>import('../pages/special/coupons'))
const couponCategories=lazy(()=>import('../pages/special/couponCategories'))
const requests=lazy(()=>import('../pages/special/requests'))
//financial tab
const internalTransactions=lazy(()=>import('../pages/financial/internalTransactions'))
const externalTransactions=lazy(()=>import('../pages/financial/externalTransactions'))
const checkoutRequests=lazy(()=>import('../pages/financial/checkoutRequests'))
//messages tab
const send=lazy(()=>import('../pages/messages/send'))
const recive=lazy(()=>import('../pages/messages/recive'))
//appPages tab
const aboutUs=lazy(()=>import('../pages/appPages/aboutUs'))
const faq=lazy(()=>import('../pages/appPages/faq'))
const faqCategories=lazy(()=>import('../pages/appPages/faqCategories'))
//setting tab
const setting=lazy(()=>import('../pages/setting'))


const routes=[
    {path:'/',exact:true,name:'home',component:home},

    {path:'/user-contacts',exact:true,name:'contacts',component:contacts},
    {path:'/user-channels',exact:true,name:'channels',component:channels},

    {path:'/content-ads',exact:true,name:'ads',component:ads},
    {path:'/content-adsCategory',exact:true,name:'adsCategory',component:adsCategory},
    {path:'/content-adsTags',exact:true,name:'adsTags',component:adsTags},
    {path:'/content-tisers',exact:true,name:'tisers',component:tisers},
    {path:'/content-tisersCategory',exact:true,name:'tisersCategory',component:tisersCategory},
    {path:'/content-slideshow',exact:true,name:'slideshow',component:slideshow},

    {path:'/special-presents',exact:true,name:'presents',component:presents},
    {path:'/special-lotteries',exact:true,name:'lotteries',component:lotteries},
    {path:'/special-roundOfLuck',exact:true,name:'roundOfLuck',component:roundOfLuck},
    {path:'/special-coupons',exact:true,name:'coupons',component:coupons},
    {path:'/special-couponCategories',exact:true,name:'couponCategories',component:couponCategories},
    {path:'/special-requests',exact:true,name:'requests',component:requests},

    {path:'/financial-internalTransactions',exact:true,name:'internalTransactions',component:internalTransactions},
    {path:'/financial-externalTransactions',exact:true,name:'externalTransactions',component:externalTransactions},
    {path:'/financial-checkoutRequests',exact:true,name:'checkoutRequests',component:checkoutRequests},

    {path:'/messages-send',exact:true,name:'send',component:send},
    {path:'/messages-recive',exact:true,name:'recive',component:recive},

    {path:'/appPages-aboutUs',exact:true,name:'aboutUs',component:aboutUs},
    {path:'/appPages-faq',exact:true,name:'faq',component:faq},
    {path:'/appPages-faqCategories',exact:true,name:'faqCategories',component:faqCategories},

    {path:'/setting',exact:true,name:'setting',component:setting},

]

export default routes