const navs = [
    {
        name: 'محصولات',
        tag: '/products',
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
        tag: '/doctors',
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
        tag: '/edit',
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
        to: '/comments-products',
        tag: '/comments',
        icon: 'chat',
        children: [
            {
                name: 'محصولات',
                to: '/comments-products'
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
        tag: '/financial',
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
        tag: '/customers',
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
        tag: '/statistics',
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
        to: '/messages',
        tag: '/messages',
        icon: 'message',
    },
    {
        name: 'درباره ما',
        to: '/aboutUs',
        tag: '/aboutUs',
        icon: 'info',
    },
    {
        name: 'سوالات متداول',
        to: '/faq',
        tag: '/faq',
        icon: 'faq',
    },
    {
        name: 'قوانین و مقررات',
        to: '/terms',
        tag: '/terms',
        icon: 'paper',
    },
    {
        name: 'تنظیمات',
        to: '/setting',
        tag: '/setting',
        icon: 'setting',
    }
]
export default navs