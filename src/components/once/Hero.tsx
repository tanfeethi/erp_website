import React from "react";
import WrapperContainer from "../common/WrapperContainer";
import Header from "../common/Header";

const Hero: React.FC = () => {
    return (
        <div
            id="hero"
            className="relative h-screen bg-no-repeat bg-center flex items-center overflow-hidden border border-t-0 border-b-[#E2E2E2]"
        >
            <img
                src="/assets/home/Shape.png"
                alt="Shape"
                className="absolute top-0 left-0 w-[400px] md:w-[800px] lg:w-[1150px] z-0"
            />

            <WrapperContainer>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20 w-full relative z-10">
                    <div className="flex items-center justify-center w-full lg:w-1/2">
                        <img
                            src="/assets/home/heroBg.png"
                            alt="heroBg"
                            className="w-full"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 text-right">
                        <Header
                            title="تحكّم في أعمالك من شاشة واحدة"
                            className="items-start text-right"
                            description="نظام JEC ERP يجمع كل ما تحتاجه لإدارة"
                            subtitle="شركتك"
                        />

                        <p className="text-[#939393] text-sm md:text-base leading-relaxed mt-6 max-w-xl">
                            حلول ذكية تدعم نمو شركتك في مختلف المجالات التشغيلية، من المحاسبة، والموارد البشرية، إلى علاقات العملاء وإدارة المشاريع – كل ذلك في نظام واحد.
                        </p>

                        <button className="btn bg-[#13476D] text-white hover:bg-[#0f3653] rounded-md mt-6 px-4 py-2">
                            جرّب الآن
                        </button>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    );
};

export default Hero;