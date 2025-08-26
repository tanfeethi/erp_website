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
import { Link } from 'react-router'

const features = [
    {
        icon: icon1,
        title: "كل شيء في مكان واحد",
        description: "تحكم في جميع أعمالك من نظام واحد، من المحاسبة إلى الموارد البشرية والمبيعات، مما يعزز كفاءة التشغيل واتخاذ القرارات."
    },
    {
        icon: icon2,
        title: "تقارير دقيقة وفورية",
        description: "احصل على تقارير لحظية تساعدك على اتخاذ قرارات مستنيرة، تشمل الأداء المالي، المبيعات، الموارد البشرية، وغيرها بدقة وكفاءة."
    },
    {
        icon: icon3,
        title: "أمان على مستوى المؤسسات",
        description: "نستخدم أحدث تقنيات التشفير لحماية بياناتك، مع صلاحيات دقيقة ومراقبة للوصول تضمن سلامة معلوماتك وخصوصيتها."
    },
    {
        icon: icon4,
        title: "واجهة عصرية وسهولة الاستخدام",
        description: "واجهة استخدام حديثة وسهلة تجعل من التنقل في النظام تجربة ممتعة، مع دعم كامل للغة العربية وتوافق مع جميع أجهزتك."
    },
    {
        icon: icon5,
        title: "التوقيع الإلكتروني",
        description: "وقع مستنداتك إلكترونيًا بأمان، وقلل من الاعتماد على الورق، مع ضمان التوافق مع المتطلبات القانونية في المملكة العربية السعودية."
    },
    {
        icon: icon6,
        title: "إدارة الوثائق (DMS)",
        description: "نظام متكامل لإدارة الوثائق يتيح لك أرشفة، تنظيم، والوصول إلى مستنداتك بسهولة من أي مكان وفي أي وقت."
    },
    {
        icon: icon7,
        title: "الإشعارات الذكية",
        description: "احصل على تنبيهات لحظية حول المهام، الموافقات، والتغييرات المهمة عبر البريد الإلكتروني أو داخل النظام."
    },
    {
        icon: icon8,
        title: "الوضع الليلي (Dark Mode)",
        description: "نظام العمل الليلي لحماية عينيك أثناء الاستخدام المطول، مع إمكانية التبديل بين الوضعين بسهولة."
    },
    {
        icon: icon9,
        title: "التحليلات التنبؤية",
        description: "باستخدام الذكاء الاصطناعي، يوفر النظام تحليلات تنبؤية تساعدك على الاستعداد للتحديات واتخاذ قرارات استراتيجية دقيقة."
    },
    {
        icon: icon10,
        title: "ربط Power BI وواجهات API",
        description: "قم بربط النظام مع Power BI أو الأنظمة الأخرى عبر واجهات API لتوحيد البيانات والتحليلات في منصة واحدة."
    },
    {
        icon: icon11,
        title: "مساعد ذكي (AI Assistant)",
        description: "مساعد ذكي مدمج يساعدك في تنفيذ المهام، الرد على الاستفسارات، وتقديم التوصيات بناءً على تحليل البيانات."
    }
];

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
                        subtitle="JEC ERP؟"
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
                                <button className="px-4 py-2 text-white bg-[#13476D] rounded hover:bg-[#0f3a59] transition cursor-pointer">
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