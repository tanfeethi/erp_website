import WrapperContainer from "../common/WrapperContainer"
import Header from "../common/Header"

const cardData = [
    {
        title: "متابعة مشاريعك بدكاء و وضوح خطوة بخطوة",
        description:
            "تابع مشاريعك بكل سهولة ووضوح مع تقارير دقيقة وبواجهات تحكم تفاعلية تساعدك على إدارة الوقت والميزانية بكفاءة.",
        image: "/assets/systems/image1.png",
    },
    {
        title: "إدارة بيانات فريقك بسهولة",
        description:
            "تصفح ملفات الموظفين، الغيابات، الحضور، والتقارير في أي وقت من مكان واحد.",
        image: "/assets/systems/image2.png",
    },
    {
        title: "تابع أداء شركتك لحظة بلحظة",
        description:
            "احصل على رؤية شاملة لبيانات الموظفين، المبيعات، والمشاريع لتتمكن من اتخاذ قرارات دقيقة وسريعة.",
        image: "/assets/systems/image3.png",
    },
]

const OurPlan = () => {
    return (
        <div className="my-8">
            <WrapperContainer>
                <div className="bg-white py-20">
                    <Header
                        title="تحكم في أعمالك بلمسة زر – جرب JEC ERP اليوم."
                        description="خطوتك الأولى نحو إدارة ذكية"
                        subtitle="تبدأ من هنا"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mt-8">
                        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="text-right">
                                <div className="text-xs">تنزيل من</div>
                                <div className="text-lg font-semibold">App Store</div>
                            </div>
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        </button>

                        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="text-right">
                                <div className="text-xs">احصل عليه من</div>
                                <div className="text-lg font-semibold">Google Play</div>
                            </div>
                            <svg width="32" height="32" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                <g filter="url(#filter0_ii_3783_5393)">
                                    <path d="M4.46121 4.40192C4.17133 4.71326 4 5.19645 4 5.82217V28.1783C4 28.805 4.17133 29.2872 4.46121 29.5985L4.53492 29.6713L16.8759 17.1478V17.0002V16.8526L4.53492 4.32813L4.46121 4.40192Z" fill="url(#paint0_linear_3783_5393)" />
                                    <path d="M20.9887 21.3226L16.8757 17.1468V16.9992V16.8516L20.9897 12.6768L21.0824 12.7303L25.9564 15.5405C27.348 16.3431 27.348 17.6562 25.9564 18.4599L21.0824 21.2701L20.9887 21.3226Z" fill="url(#paint1_linear_3783_5393)" />
                                    <g filter="url(#filter1_i_3783_5393)">
                                        <path d="M21.0825 21.2699L16.8749 17L4.46118 29.5983C4.9194 30.0916 5.67745 30.1523 6.53112 29.661L21.0825 21.2699Z" fill="url(#paint2_linear_3783_5393)" />
                                    </g>
                                    <path d="M21.0825 12.7298L6.53112 4.33972C5.67745 3.84744 4.9194 3.9091 4.46118 4.4024L16.8759 17.0007L21.0825 12.7298Z" fill="url(#paint3_linear_3783_5393)" />
                                </g>
                                <defs>
                                    <filter id="filter0_ii_3783_5393" x="4" y="4" width="23" height="26.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="-0.15" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3783_5393" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.15" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="effect1_innerShadow_3783_5393" result="effect2_innerShadow_3783_5393" />
                                    </filter>
                                    <filter id="filter1_i_3783_5393" x="4.46118" y="17" width="16.6213" height="13.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="-0.15" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3783_5393" />
                                    </filter>
                                    <linearGradient id="paint0_linear_3783_5393" x1="15.7819" y1="5.58563" x2="-1.18043" y2="22.3008" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00A0FF" />
                                        <stop offset="0.0066" stopColor="#00A1FF" />
                                        <stop offset="0.2601" stopColor="#00BEFF" />
                                        <stop offset="0.5122" stopColor="#00D2FF" />
                                        <stop offset="0.7604" stopColor="#00DFFF" />
                                        <stop offset="1" stopColor="#00E3FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_3783_5393" x1="27.7678" y1="16.9992" x2="3.66576" y2="16.9992" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFE000" />
                                        <stop offset="0.4087" stopColor="#FFBD00" />
                                        <stop offset="0.7754" stopColor="#FFA500" />
                                        <stop offset="1" stopColor="#FF9C00" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_3783_5393" x1="18.7975" y1="19.3188" x2="-4.20563" y2="41.9866" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF3A44" />
                                        <stop offset="1" stopColor="#C31162" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_3783_5393" x1="1.33475" y1="-3.03973" x2="11.6063" y2="7.08207" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#32A071" />
                                        <stop offset="0.0685" stopColor="#2DA771" />
                                        <stop offset="0.4762" stopColor="#15CF74" />
                                        <stop offset="0.8009" stopColor="#06E775" />
                                        <stop offset="1" stopColor="#00F076" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="border border-[#E2E2E2] rounded-lg p-6 flex flex-col items-center text-center transition-shadow hover:shadow-md"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full max-w-[250px] object-contain mb-4"
                            />
                            <h3 className="font-semibold text-[#030303] text-base md:text-lg mb-2">{card.title}</h3>
                            <p className="text-[#7A7A7A] text-sm leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </WrapperContainer>
        </div>
    )
}

export default OurPlan;