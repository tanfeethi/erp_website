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
        <WrapperContainer>
            <div className="py-20 text-right">
                <Header
                    title="نظام JEC ERP يمنحك السيطرة الكاملة على أعمالك من أي مكان وفي أي وقت، مع واجهة استخدام عصرية، أدوات متكاملة، ودعم مستمر يساعدك على تحقيق أهدافك بكفاءة وسلاسة."
                    description="حيث تلتقي التقنية بالكفاءة -"
                    subtitle="JEC ERP "
                />

                <div className="flex justify-center my-6 gap-2 text-sm rounded-full border border-[#13476D] w-max mx-auto">
                    <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`px-5 py-1 rounded-full transition ${billingPeriod === "monthly" ? "bg-[#13476D] text-white" : "text-[#13476D]"
                            }`}
                    >
                        شهري
                    </button>
                    <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`px-5 py-1 rounded-full transition ${billingPeriod === "yearly" ? "bg-[#13476D] text-white" : "text-[#13476D]"
                            }`}
                    >
                        سنوي
                    </button>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#13476D]">
                    {packagesData.map((pkg, idx) => {
                        const isProfessional = idx === 1; // highlight professional package
                        const price = billingPeriod === "monthly" ? pkg.priceMonthly : pkg.priceYearly;
                        const duration = billingPeriod === "monthly" ? pkg.durationMonthly : pkg.durationYearly;

                        return (
                            <div
                                key={idx}
                                className={`border rounded-md flex flex-col justify-between ${isProfessional
                                        ? "bg-[#13476D] text-white border-[#13476D] shadow-lg"
                                        : "bg-white border-gray-200"
                                    }`}
                            >
                                {/* Header */}
                                <div className={`p-6 text-center ${isProfessional ? "bg-[#0F3653]" : ""} rounded-t-md`}>
                                    <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                                    <span className="text-4xl font-extrabold">
                                        {price}
                                        <span className="text-lg font-normal mr-1">ريال</span>
                                    </span>
                                    <p className="text-sm mt-1">{duration} أيام</p>

                                    <button
                                        className={`mt-6 px-6 py-2 rounded-md font-medium ${isProfessional
                                                ? "bg-white text-[#13476D] hover:bg-gray-100"
                                                : "border border-[#13476D] text-[#13476D] hover:bg-[#13476D] hover:text-white"
                                            }`}
                                    >
                                        ابدأ الآن
                                    </button>
                                </div>

                                {/* Features List */}
                                <div className="p-6 space-y-4">
                                    {featureDescriptions.map((desc, i) => {
                                        const available = pkg.features[i];
                                        return (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 text-sm leading-relaxed"
                                            >
                                                <div
                                                    className={`p-1 rounded-full border ${available
                                                            ? `border-${isProfessional ? "white" : "green-500"} bg-${isProfessional ? "white" : "green-500"}`
                                                            : "border-gray-400"
                                                        } flex items-center justify-center text-white`}
                                                    style={{
                                                        backgroundColor: available
                                                            ? isProfessional
                                                                ? "white"
                                                                : "#10B981" // Tailwind green-500 hex
                                                            : "transparent",
                                                        color: available
                                                            ? isProfessional
                                                                ? "#13476D"
                                                                : "white"
                                                            : "#9CA3AF", // gray-400
                                                    }}
                                                >
                                                    {available ? (
                                                        <FiCheck />
                                                    ) : (
                                                        <FiX color={isProfessional ? "#fff" : "#9CA3AF"} />
                                                    )}
                                                </div>
                                                <p
                                                    className={`${available
                                                            ? isProfessional
                                                                ? "text-white"
                                                                : "text-[#13476D]"
                                                            : "text-gray-400"
                                                        }`}
                                                >
                                                    {desc}
                                                </p>
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
    );
};

export default Packages;