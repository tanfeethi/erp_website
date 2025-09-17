import WrapperContainer from "../common/WrapperContainer";
import Header from "../common/Header";

const Hero = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full md:w-[45%] pt-24">
          <WrapperContainer>
            <Header
              title="تحكّم في أعمالك من شاشة واحدة"
              className="items-start text-right"
              description="نظام JEC ERP يجمع كل ما تحتاجه لإدارة"
              subtitle="شركتك"
            />

            <p className="text-[#939393] text-sm md:text-base leading-relaxed mt-6 max-w-xl">
              حلول ذكية تدعم نمو شركتك في مختلف المجالات التشغيلية، من المحاسبة،
              والموارد البشرية، إلى علاقات العملاء وإدارة المشاريع – كل ذلك في
              نظام واحد.
            </p>

            <button className="btn bg-[#13476D] text-white hover:bg-[#0f3653] rounded-md mt-6 px-4 py-2">
              جرّب الآن
            </button>
          </WrapperContainer>
        </div>
        <div
          className="bg-contain bg-no-repeat flex justify-center mt-5 text-white min-h-fit md:min-h-screen md:w-[55%] md:items-center xl:items-end"
          style={{
            backgroundImage: "url('/assets/home/Shape.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <img src="/assets/home/heroBg.webp" alt="heroBg" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
