import Header from "../common/Header"
import WrapperContainer from "../common/WrapperContainer"
import Marquee from "react-fast-marquee";
import adobe from "/assets/home/adobe.webp";
import amazon from "/assets/home/amazon.webp";
import Card from "/assets/home/Card.webp";
import spotify from "/assets/home/spotify.webp";
import zapier from "/assets/home/zapier.webp";
import zoom from "/assets/home/zapier.webp";

const Sponsors = () => {

    const clientLogos = [adobe, amazon, Card, spotify, zapier, zoom];

    return (
        <div className="border border-t-0 border-b-[#E2E2E2] pb-8">
            <WrapperContainer>
                <div className="py-20">
                    <Header
                        title="رضا عملائنا هو محور اهتمامنا، ونسعى دائمًا لتوفير حلول تدعم نموهم وتحقق أهدافهم بسهولة."
                        description="ننمو بنجاح"
                        subtitle="عملائنا"
                    />
                </div>
                <div className="relative w-full bg-white py-6" dir="ltr">
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {clientLogos.concat(clientLogos).map((logo, index) => (
                            <div key={index} className="mx-8 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    className="h-10 md:h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </WrapperContainer >
        </div>
    )
}

export default Sponsors