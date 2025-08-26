import { useState } from 'react';
import WrapperContainer from '../common/WrapperContainer';
import Header from '../common/Header';
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

const systemData = [
    {
        id: 1,
        title: 'المالية والمحاسبة',
        description: 'تحكم كامل بالبيانات المالية مع تقارير دقيقة.',
        list: [
            'دفتر الأستاذ العام',
            'حسابات العملاء والموردين',
            'إدارة الفواتير والمركبات',
            'قائمة الدخل، الميزانية، التدفقات النقدية',
        ],
        image: '/assets/systems/image1.webp',
    },
    {
        id: 2,
        title: 'إدارة المبيعات',
        description: 'من العرض إلى الفاتورة - كل شيء في نظام واحد',
        list: [
            'عروض الأسعار وأوامر البيع',
            'فواتير العملاء',
            'إدارة العمولات',
            'تتبع العملاء المحتملين',
        ],
        image: '/assets/systems/image2.webp',
    },
    {
        id: 3,
        title: 'إدارة المشتريات',
        description: 'تنظيم شامل لسلسلة التوريد',
        list: [
            'طلبات وأوامر الشراء',
            'فواتير المشتريات',
            'التوريد والموردين',
            'إدارة الموردين',
        ],
        image: '/assets/systems/image3.webp',
    },
    {
        id: 4,
        title: 'إدارة المشاريع',
        description: 'تخطيط ومتابعة تنفيذ المشاريع بسهولة',
        list: [
            'مراحل المشروع',
            'إدارة المهام',
            'تتبع التكاليف',
            'مراقبة الأداء',
        ],
        image: '/assets/systems/image4.webp',
    },
    {
        id: 5,
        title: 'الموارد البشرية',
        description: 'إدارة كاملة للموظفين والإجازات والرواتب',
        list: [
            'بيانات الموظفين',
            'طلبات الإجازة',
            'سجل الرواتب',
            'العقود والوثائق',
        ],
        image: '/assets/systems/image5.webp',
    },
    {
        id: 6,
        title: 'إدارة علاقات العملاء',
        description: 'تحسين تجربة العملاء وبناء علاقات مستدامة',
        list: [
            'متابعة العملاء',
            'الدعم الفني',
            'إدارة الشكاوى',
            'تحليلات العملاء',
        ],
        image: '/assets/systems/image6.webp',
    },
];

const ITEMS_PER_PAGE = 3;

const Systems = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCardId, setActiveCardId] = useState(systemData[0].id);

    const paginatedData = systemData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const activeItem = systemData.find((item) => item.id === activeCardId);

    const totalPages = Math.ceil(systemData.length / ITEMS_PER_PAGE);

    return (
        <div className='mt-12'>
            <WrapperContainer>
                <div className="py-20">
                    <Header
                        title="حلول ذكية تدعم نمو شركتك في مختلف المجالات التشغيلية، من المحاسبة والموارد البشرية إلى علاقات العملاء وإدارة المشاريع، كل ذلك في نظام واحد."
                        description="أنظمة وحلول متكاملة لإدارة أعمالك من"
                        subtitle="مكان واحد"
                    />

                    <div className="flex flex-col lg:flex-row gap-6 mt-10 items-start">
                        <div className="flex-1 space-y-4">
                            {paginatedData.map((item) => {
                                const isActive = activeCardId === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className={`cursor-pointer p-5 bg-white text-right rounded-r-lg shadow-sm border-r-4 transition-all duration-300 ${isActive ? 'border-[#13476D]' : 'border-[#E5E7EB]'
                                            }`}
                                        onClick={() => setActiveCardId(item.id)}
                                    >
                                        <div className="flex items-start mb-2">
                                            <span className="text-[#BABABA] font-bold text-sm">
                                                #{String(item.id).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className='space-y-2'>
                                            <h3
                                                className={`font-bold text-lg text-[#13476D]`}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-[#030303] text-sm font-semibold mb-2">
                                                {item.description}
                                            </p>
                                            <ul className="list-disc text-[#030303] text-sm pr-5 space-y-1">
                                                {item.list.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="flex justify-center items-center gap-2 mt-6">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 text-[#13476D] disabled:opacity-30 cursor-pointer"
                                >
                                    <GoArrowDown />
                                </button>
                                <span className="text-[#13476D] font-bold text-sm p-3 border border-[#13476D] rounded-2xl cursor-pointer">
                                    {currentPage} / {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 text-[#13476D] disabled:opacity-30 cursor-pointer"
                                >
                                    <GoArrowUp />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            {activeItem && (
                                <img
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    data-aos="fade-up"
                                    width={800}
                                    height={800}
                                    className="rounded-xl object-contain"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
};

export default Systems;