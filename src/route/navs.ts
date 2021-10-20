const navs=[
    {
        name:'خانه',
        to:'/',
        icon:'home',
    },
    {
        name:'مدیریت کاربران',
        to:'/user-contacts',
        icon:'user-group',
        children:[
            {
                name:'مخاطبین',
                to:'/user-contacts'
            },
            {
                name:'کانال ها',
                to:'/user-channels'
            }
        ]
    },
    {
        name:'مدیریت محتوا',
        to:'/content-ads',
        icon:'image',
        children:[
            {
                name:'تبلیغات',
                to:'/content-ads'
            },
            {
                name:'دسته‌بندی تبلیغات',
                to:'/content-adsCategory'
            },
            {
                name:'تگ‌های تبلیغات',
                to:'/content-adsTags'
            },
            {
                name:'تیزر‌ها',
                to:'/content-tisers'
            },
            {
                name:'دسته‌بندی تیزر‌ها',
                to:'/content-tisersCategory'
            },
            {
                name:'اسلایدشو',
                to:'/content-slideshow'
            }
        ]
    },
    {
        name:'جوایز و تخفیف‌ها',
        to:'/special-presents',
        icon:'percent',
        children:[
            {
                name:'هدایا',
                to:'/special-presents'
            },
            {
                name:'قرعه‌کشی',
                to:'/special-lotteries'
            },
            {
                name:'گردونه‌ی شانس',
                to:'/special-roundOfLuck'
            },
            {
                name:'بن های تخفیف',
                to:'/special-coupons'
            },
            {
                name:'دسته‌بندی بن‌ها',
                to:'/special-couponCategories'
            },
            {
                name:'درخواست‌ها',
                to:'/special-requests'
            }
        ]
    },
    {
        name:'مدیریت مالی',
        to:'/financial-internalTransactions',
        icon:'wallet',
        children:[
            {
                name:'تراکنش‌های داخلی',
                to:'/financial-internalTransactions'
            },
            {
                name:'تراکنش‌های خارجی',
                to:'/financial-externalTransactions'
            },
            {
                name:'درخواست‌های تسویه',
                to:'/financial-checkoutRequests'
            }
        ]
    },
    {
        name:'پیام ها',
        to:'/messages-send',
        icon:'message',
        children:[
            {
                name:'پیام‌های ارسالی',
                to:'/messages-send'
            },
            {
                name:'پیام‌های دریافتی',
                to:'/messages-recive'
            }
        ]
    },
    {
        name:'صفحات برنامه',
        to:'/appPages-aboutUs',
        icon:'paper',
        children:[
            {
                name:'درباره‌ی ما',
                to:'/appPages-aboutUs'
            },
            {
                name:'سوالات متداول',
                to:'/appPages-faq'
            },
            {
                name:'دسته‌بندی سوالات',
                to:'/appPages-faqCategories'
            }
        ]
    },
    {
        name:'تنظیمات',
        to:'/setting',
        icon:'setting',
    }
]
export default navs