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

const WhyUs = () => {
    return (
        <WrapperContainer>
            <div className="py-20">
                <Header
                    title="جميع الحلول المعروضة هي اقتراحات من JEC، ويمكن للعميل اختيار الأنظمة التي تتناسب مع طبيعة عمله واحتياجاته التشغيلية."
                    description="لماذا تختار"
                    subtitle="JEC ERP?"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </WrapperContainer>
    )
}

export default WhyUs;