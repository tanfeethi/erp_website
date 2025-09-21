import { useState } from "react";
import WrapperContainer from "../common/WrapperContainer";
import Header from "../common/Header";
import { FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router";

const packagesData = [
  {
    name: "الباقة الأساسية",
    priceMonthly: 150,
    priceYearly: 1500,
    features: [
      "حتى 3 مستخدمين",
      "إدارة الفواتير والعملاء",
      "إدارة بسيطة للمخزون",
      "دعم عبر الإيميل",
    ],
  },
  {
    name: "الباقة المتقدمة",
    priceMonthly: 350,
    priceYearly: 3500,
    features: [
      "حتى 10 مستخدمين",
      "تقارير مالية مفصلة",
      "إدارة مخزون + مشتريات",
      "نظام مبيعات + نقاط بيع",
      "دعم عبر الإيميل + واتساب",
    ],
  },
  {
    name: "الباقة المميزة",
    priceMonthly: 900,
    priceYearly: 9000,
    features: [
      "عدد مستخدمين غير محدود",
      "تقارير مخصصة متقدمة",
      "إدارة مشاريع ورواتب",
      "API ربط أنظمة خارجية",
      "مدير حساب مخصص + دعم 24/7",
    ],
  },
];

const Packages = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <div className="border border-t-0 border-b-[#E2E2E2]">
      <WrapperContainer>
        <div className="py-20 text-right">
          <Header
            title="نظام JEC ERP يمنحك السيطرة الكاملة على أعمالك من أي مكان وفي أي وقت، مع واجهة استخدام عصرية، أدوات متكاملة، ودعم مستمر يساعدك على تحقيق أهدافك بكفاءة وسلاسة."
            description="حيث تلتقي التقنية بالكفاءة -"
            subtitle="JEC ERP "
          />

          {/* Billing Toggle */}
          <div className="flex justify-center p-2 my-8 gap-2 text-sm rounded-full border border-[#13476D] w-max mx-auto bg-white shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-full transition font-semibold cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-[#13476D] text-white"
                  : "text-[#13476D]"
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-3 rounded-full transition font-semibold cursor-pointer ${
                billingPeriod === "yearly"
                  ? "bg-[#13476D] text-white"
                  : "text-[#13476D]"
              }`}
            >
              سنوي
            </button>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg, idx) => {
              const isPopular = idx === 1; // الباقة المتقدمة الأكثر شيوعًا
              const price =
                billingPeriod === "monthly"
                  ? pkg.priceMonthly
                  : pkg.priceYearly;

              return (
                <div
                  key={idx}
                  className={`relative group transition-all duration-300 border rounded-2xl p-6 shadow-md flex flex-col justify-between hover:scale-[1.02] ${
                    isPopular
                      ? "bg-[#13476D] text-white border-[#13476D] shadow-xl"
                      : "bg-white text-[#13476D] border-gray-200"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute top-3 left-3 bg-white text-[#13476D] text-xs font-bold py-1 px-3 rounded-full shadow-md">
                      الأكثر شهرة
                    </span>
                  )}

                  {/* Package Header */}
                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                    <div className="text-5xl font-extrabold flex items-center justify-center gap-1">
                      {price}
                      <span className="text-lg font-normal">ريال</span>
                    </div>

                    <button
                      onClick={() => navigate("/contact-us")}
                      className={`mt-6 px-6 py-2 w-full rounded-full font-semibold transition-all duration-200 ${
                        isPopular
                          ? "bg-white text-[#13476D] hover:bg-gray-100"
                          : "border border-[#13476D] text-[#13476D] hover:bg-[#13476D] hover:text-white"
                      }`}
                    >
                      ابدأ الآن
                    </button>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-4">
                    {pkg.features.map((desc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm leading-relaxed"
                      >
                        <div
                          className={`w-6 h-6 flex items-center justify-center rounded-full border text-xs ${
                            isPopular
                              ? "bg-white text-[#13476D] border-white"
                              : "bg-green-500 text-white border-green-500"
                          }`}
                        >
                          <FiCheck />
                        </div>
                        <p>{desc}</p>
                      </div>
                    ))}
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
