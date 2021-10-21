const navs = [
    {
        name: 'محصولات',
        to: '/products-allProduct',
        icon: 'product',
        children: [
            {
                name: 'همه محصولات',
                to: '/products-allProduct'
            },
            {
                name: 'دسته بندی‌ها',
                to: '/products-categories'
            },
            {
                name: 'برچسب‌ها',
                to: '/products-tags'
            },
            {
                name: 'ویژگی‌ها',
                to: '/products-speciallTags'
            },
            {
                name: 'سفارشات',
                to: '/products-orders'
            },
            {
                name: 'حیوانات',
                to: '/products-pets'
            }
        ]
    },
    {
        name: 'دامپزشک‌ها',
        to: '/doctors-doctor_management',
        icon: 'stethoscope-mini',
        children: [
            {
                name: 'مدیریت دامپزشک‌ها',
                to: '/doctors-doctor_management'
            },
            {
                name: 'ویزیت‌ها',
                to: '/doctors-visits'
            }
        ]
    },
    {
        name: 'ویرایش صفحه اصلی',
        to: '/edit-videos',
        icon: 'pen',
        children: [
            {
                name: 'ویدیو‌ها',
                to: '/edit-videos'
            },
            {
                name: 'بنر‌ها',
                to: '/edit-baners'
            }
        ]
    },
    {
        name: 'نظرات',
        to: '/comments-product',
        icon: 'chat',
        children: [
            {
                name: 'محصولات',
                to: '/comments-product'
            },
            {
                name: 'دامپزشک‌ها',
                to: '/comments-doctors'
            }
        ]
    },
    {
        name: 'مدیریت مالی',
        to: '/financial-internalTransactions',
        icon: 'wallet',
        children: [
            {
                name: 'تراکنش‌ها',
                to: '/financial-internalTransactions'
            },
            {
                name: 'درخواست‌های تسویه',
                to: '/financial-checkoutRequests'
            },
            {
                name: 'هدیه',
                to: '/financial-externalTransactions'
            },
            {
                name: 'کدتخفیف',
                to: '/financial-externalTransactions'
            }
        ]
    },
    {
        name: 'مدیریت مشتریان',
        to: '/customers-customers',
        icon: 'user-group',
        children: [
            {
                name: 'مشتریان',
                to: '/customers-customers'
            },
            {
                name: 'عضویت ویژه',
                to: '/customers-vip'
            }
        ]
    },
    {
        name: 'آمار',
        to: '/statistics-doctors_statistics',
        icon: 'bar-chart',
        children: [
            {
                name: 'دامپزشک',
                to: '/statistics-doctors_statistics'
            },
            {
                name: 'محصولات',
                to: '/statistics-product_statistics'
            },
            {
                name: 'تجمعی',
                to: '/statistics-total'
            }
        ]
    },
    {
        name: 'پیام‌ها',
        to: '/semessagestting',
        icon: 'message',
    },
    {
        name: 'درباره ما',
        to: '/aboutUs',
        icon: 'info',
    },
    {
        name: 'سوالات متداول',
        to: '/faq',
        icon: 'faq',
    },
    {
        name: 'قوانین و مقررات',
        to: '/terms',
        icon: 'paper',
    },
    {
        name: 'تنظیمات',
        to: '/setting',
        icon: 'setting',
    }
]
export default navs