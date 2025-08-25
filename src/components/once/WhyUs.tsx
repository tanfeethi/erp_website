import Header from '../common/Header'
import WrapperContainer from '../common/WrapperContainer'
import FeatureCard from './FeatureCard'

import icon1 from '/assets/features/icon1.gif'
import icon2 from '/assets/features/icon2.gif'
import icon3 from '/assets/features/icon3.gif'
import icon4 from '/assets/features/icon4.gif'
import icon5 from '/assets/features/icon5.gif'
import icon6 from '/assets/features/icon6.gif'
import icon7 from '/assets/features/icon7.gif'
import icon8 from '/assets/features/icon8.gif'
import icon9 from '/assets/features/icon9.gif'
import icon10 from '/assets/features/icon10.gif'
import icon11 from '/assets/features/icon11.gif'
import icon12 from '/assets/features/icon12.gif'
import { Link } from 'react-router'

const features = [
    { icon: icon1, title: 'ميزة 1', description: 'وصف الميزة 1' },
    { icon: icon2, title: 'ميزة 2', description: 'وصف الميزة 2' },
    { icon: icon3, title: 'ميزة 3', description: 'وصف الميزة 3' },
    { icon: icon4, title: 'ميزة 4', description: 'وصف الميزة 4' },
    { icon: icon5, title: 'ميزة 5', description: 'وصف الميزة 5' },
    { icon: icon6, title: 'ميزة 6', description: 'وصف الميزة 6' },
    { icon: icon7, title: 'ميزة 7', description: 'وصف الميزة 7' },
    { icon: icon8, title: 'ميزة 8', description: 'وصف الميزة 8' },
    { icon: icon9, title: 'ميزة 9', description: 'وصف الميزة 9' },
    { icon: icon10, title: 'ميزة 10', description: 'وصف الميزة 10' },
    { icon: icon11, title: 'ميزة 11', description: 'وصف الميزة 11' },
    { icon: icon12, title: 'ميزة 12', description: 'وصف الميزة 12' },
]

interface WhyUsProps {
    limit?: number
    showMoreButton?: boolean
}

const WhyUs = ({ limit, showMoreButton = false }: WhyUsProps) => {
    const displayedFeatures = limit ? features.slice(0, limit) : features

    return (
        <div className='mt-12 border border-t-0 border-b-[#E2E2E2]'>
            <WrapperContainer>
                <div className="py-20">
                    <Header
                        title="جميع الحلول المعروضة هي اقتراحات من JEC، ويمكن للعميل اختيار الأنظمة التي تتناسب مع طبيعة عمله واحتياجاته التشغيلية."
                        description="لماذا تختار"
                        subtitle="JEC ERP?"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {displayedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                data-aos="flip-left"
                                data-aos-delay={index * 100}
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </div>
                        ))}
                    </div>

                    {showMoreButton && (
                        <Link to="/features">
                            <div className="flex justify-center mt-8">
                                <button className="px-4 py-2 text-white bg-[#13476D] rounded hover:bg-[#0f3a59] transition">
                                    قراءة المزيد
                                </button>
                            </div>
                        </Link>
                    )}
                </div>
            </WrapperContainer>
        </div>
    )
}

export default WhyUs