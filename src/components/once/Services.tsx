import { useState } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import WrapperContainer from '../common/WrapperContainer'
import Header from '../common/Header'

const servicesData = [
    {
        title: 'تابع أداء فريقك لحظة بلحظة',
        description: 'احصل على رؤية شاملة للمهام والموظفين لمساعدتك في اتخاذ قرارات دقيقة وسريعة.',
        image: '/assets/systems/image3.png',
    },
    {
        title: 'تحكم في العمليات اليومية بسهولة',
        description: 'قم بإدارة الموارد، المبيعات، والمشتريات من لوحة تحكم مركزية وذكية.',
        image: '/assets/systems/image4.png',
    },
    {
        title: 'تقارير تفصيلية في متناول يدك',
        description: 'ولد قرارات مدروسة عبر تقارير فورية وشاملة توضح أداء جميع أقسام شركتك.',
        image: '/assets/systems/image5.png',
    },
]

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [flipping, setFlipping] = useState(false)
    const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('left')

    const getIndex = (offset: number) => {
        return (currentIndex + offset + servicesData.length) % servicesData.length
    }

    const triggerFlip = (direction: 'prev' | 'next') => {
        setFlipDirection(direction === 'next' ? 'left' : 'right')
        setFlipping(true)

        setTimeout(() => {
            setCurrentIndex((prev) =>
                direction === 'next'
                    ? (prev + 1) % servicesData.length
                    : (prev - 1 + servicesData.length) % servicesData.length
            )
        }, 150)

        setTimeout(() => {
            setFlipping(false)
        }, 300)
    }

    const leftIndex = getIndex(-1)
    const rightIndex = getIndex(1)

    return (
        <div className="py-20 border border-t-0 border-b-[#E2E2E2]">
            <WrapperContainer>
                <Header
                    subtitle="الخدمات التي نقدمها"
                    title="نظام ERP مصمم خصيصًا ليلائم احتياجاتك ويساعدك على إدارة شركتك بكفاءة عالية."
                    description="نحن نضمن لك واجهة سهلة، تقارير دقيقة، وتحكم شامل في كل العمليات التي تحتاجها."
                />

                <div className="mt-12 flex items-center justify-center gap-6 px-4 flex-wrap">
                    <div className="w-[250px] h-[280px] rounded-xl overflow-hidden shadow-md hidden md:flex bg-white items-center justify-center p-4">
                        <img
                            src={servicesData[leftIndex].image}
                            alt="Left Mockup"
                            className="object-contain w-full h-full"
                        />
                    </div>

                    <div
                        className={`w-full max-w-md bg-white rounded-xl shadow-xl p-6 text-center flex flex-col justify-between transition-transform duration-300`}
                    >
                        <div
                            className="card-inner"
                            style={{
                                transform: flipping
                                    ? flipDirection === 'left'
                                        ? 'rotateY(180deg)'
                                        : 'rotateY(-180deg)'
                                    : 'rotateY(0deg)',
                                transition: 'transform 0.3s ease-in-out',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div className="w-full h-[180px] overflow-hidden flex justify-center mb-4">
                                <img
                                    src={servicesData[currentIndex].image}
                                    alt="ERP Feature"
                                    className="object-contain h-full transition-opacity duration-200"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-[#030303] mb-2">
                                {servicesData[currentIndex].title}
                            </h3>

                            <p className="text-sm text-[#868686] leading-relaxed mb-4">
                                {servicesData[currentIndex].description}
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={() => triggerFlip('prev')}
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white text-[#13476D] hover:bg-[#13476D] hover:text-white transition"
                                >
                                    <FiArrowRightCircle size={22} />
                                </button>
                                <button
                                    onClick={() => triggerFlip('next')}
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white text-[#13476D] hover:bg-[#13476D] hover:text-white transition"
                                >
                                    <FiArrowLeftCircle size={22} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[250px] h-[280px] rounded-xl overflow-hidden shadow-md hidden md:flex bg-white items-center justify-center p-4">
                        <img
                            src={servicesData[rightIndex].image}
                            alt="Right Mockup"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </WrapperContainer>
        </div>
    )
}

export default Services;