import { useState } from "react";
import WrapperContainer from "../common/WrapperContainer";
import Header from "../common/Header";
import { FiCheck, FiX } from "react-icons/fi";

const packagesData = [
    {
        name: "الباقة الأساسية",
        priceMonthly: 0,
        priceYearly: 0,
        durationMonthly: 7,
        durationYearly: 7 * 12,
        features: [true, true, true, false],
    },
    {
        name: "الباقة الاحترافية",
        priceMonthly: 19,
        priceYearly: 19 * 12 * 0.9,
        durationMonthly: 30,
        durationYearly: 30 * 12,
        features: [true, true, true, true],
    },
    {
        name: "الباقة الكاملة",
        priceMonthly: 40,
        priceYearly: 40 * 12 * 0.9,
        durationMonthly: 90,
        durationYearly: 90 * 12,
        features: [true, true, true, true],
    },
];

const featureDescriptions = [
    "كل ما في الباقة الأساسية",
    "سوف يوفر فقط 10% - 20% من جميع المكونات في الخطة المحلية",
    "كل ما في الباقة الأساسية",
    "سوف يوفر فقط 10% - 20% من جميع المكونات في الخطة المحلية",
];

const Packages = () => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="border border-t-0 border-b-[#E2E2E2]">
            <WrapperContainer>
                <div className="py-20 text-right">
                    <Header
                        title="نظام JEC ERP يمنحك السيطرة الكاملة على أعمالك من أي مكان وفي أي وقت، مع واجهة استخدام عصرية، أدوات متكاملة، ودعم مستمر يساعدك على تحقيق أهدافك بكفاءة وسلاسة."
                        description="حيث تلتقي التقنية بالكفاءة -"
                        subtitle="JEC ERP "
                    />

                    <div className="flex justify-center p-2 my-8 gap-2 text-sm rounded-full border border-[#13476D] w-max mx-auto bg-white shadow-sm">
                        <button
                            onClick={() => setBillingPeriod("monthly")}
                            className={`px-6 py-3 rounded-full transition font-semibold ${billingPeriod === "monthly"
                                ? "bg-[#13476D] text-white"
                                : "text-[#13476D]"
                                }`}
                        >
                            شهري
                        </button>
                        <button
                            onClick={() => setBillingPeriod("yearly")}
                            className={`px-6 py-3 rounded-full transition font-semibold ${billingPeriod === "yearly"
                                ? "bg-[#13476D] text-white"
                                : "text-[#13476D]"
                                }`}
                        >
                            سنوي
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packagesData.map((pkg, idx) => {
                            const isProfessional = idx === 1;
                            const price = billingPeriod === "monthly" ? pkg.priceMonthly : pkg.priceYearly;
                            const duration = billingPeriod === "monthly" ? pkg.durationMonthly : pkg.durationYearly;

                            return (
                                <div
                                    key={idx}
                                    className={`relative group transition-all duration-300 border rounded-2xl p-6 shadow-md flex flex-col justify-between hover:scale-[1.02] ${isProfessional
                                        ? "bg-[#13476D] text-white border-[#13476D] shadow-xl"
                                        : "bg-white text-[#13476D] border-gray-200"
                                        }`}
                                >
                                    {isProfessional && (
                                        <span className="absolute top-3 left-3 bg-white text-[#13476D] text-xs font-bold py-1 px-3 rounded-full shadow-md">
                                            الأكثر شهرة
                                        </span>
                                    )}

                                    <div className="text-center">
                                        <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                                        <div className="text-5xl font-extrabold flex items-center justify-center gap-1">
                                            {price}
                                            <span className="text-lg font-normal">ريال</span>
                                        </div>
                                        <p className="text-sm mt-1 opacity-80">{duration} أيام</p>

                                        <button
                                            className={`mt-6 px-6 py-2 w-full rounded-full font-semibold transition-all duration-200 ${isProfessional
                                                ? "bg-white text-[#13476D] hover:bg-gray-100"
                                                : "border border-[#13476D] text-[#13476D] hover:bg-[#13476D] hover:text-white"
                                                }`}
                                        >
                                            ابدأ الآن
                                        </button>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        {featureDescriptions.map((desc, i) => {
                                            const available = pkg.features[i];
                                            return (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3 text-sm leading-relaxed"
                                                >
                                                    <div
                                                        className={`w-6 h-6 flex items-center justify-center rounded-full border text-xs ${available
                                                            ? isProfessional
                                                                ? "bg-white text-[#13476D] border-white"
                                                                : "bg-green-500 text-white border-green-500"
                                                            : "border-gray-400 text-gray-400"
                                                            }`}
                                                    >
                                                        {available ? <FiCheck /> : <FiX />}
                                                    </div>
                                                    <p className={`${available ? "" : "text-gray-400"}`}>{desc}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
};

export default Packages;