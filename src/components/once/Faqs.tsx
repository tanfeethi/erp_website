import { useState } from "react"
import WrapperContainer from "../common/WrapperContainer"
import Header from "../common/Header"
import { FiPlus, FiMinus } from "react-icons/fi"

const faqData = [
    {
        question: "ما هو نظام JEC ERP؟",
        answer: "نظام JEC ERP هو حل متكامل لإدارة أعمالك من مكان واحد، يشمل المحاسبة، الموارد البشرية، المبيعات، المشتريات، علاقات العملاء، المشاريع، وغيرها من الأنظمة التشغيلية.",
    },
    {
        question: "هل يمكنني اختيار الأنظمة التي أحتاجها فقط؟",
        answer: "نعم، يمكنك تخصيص الأنظمة بحسب احتياجات عملك دون الحاجة إلى استخدام النظام بالكامل.",
    },
    {
        question: "هل يدعم النظام اللغة العربية؟",
        answer: "نعم، النظام يدعم اللغة العربية بشكل كامل، بما في ذلك الاتجاه من اليمين إلى اليسار.",
    },
    {
        question: "هل أحتاج إلى أجهزة خاصة لتشغيل النظام؟",
        answer: "لا، النظام يعمل على متصفح الإنترنت العادي دون الحاجة إلى أجهزة خاصة.",
    },
    {
        question: "كيف أحصل على الدعم الفني؟",
        answer: "يمكنك التواصل معنا عبر البريد الإلكتروني info@jec.sa أو من خلال نموذج الاتصال وسنقوم بمساعدتك على الفور.",
    },
]

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleIndex = (index: number) => {
        setOpenIndex(index === openIndex ? -1 : index)
    }

    return (
        <WrapperContainer>
            <div className="py-20">
                <Header
                    title="إذا لم تجد الإجابة التي تبحث عنها في قسم الأسئلة الشائعة، فريق الدعم لدينا على استعداد دائم لمساعدتك. تواصل معنا عبر البريد الإلكتروني info@jec.sa وسنرد عليك في أسرع وقت ممكن."
                    description="أسئلتك تهمنا… ودائمًا !"
                    subtitle="هنا للإجابة"
                />

                <div className="mt-10 space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = index === openIndex
                        return (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg overflow-hidden transition-all"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-5 text-right text-[#030303] font-medium text-sm md:text-base"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <span>{item.question}</span>
                                    {isOpen ? (
                                        <FiMinus className="text-[#13476D]" />
                                    ) : (
                                        <FiPlus className="text-[#030303]" />
                                    )}
                                </button>

                                {isOpen && (
                                    <div className="border-t border-gray-200 px-5 pb-5 text-[#868686] text-sm leading-relaxed pt-4">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </WrapperContainer>
    )
}

export default Faqs