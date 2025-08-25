import Hero from "../components/once/Hero"
import OurPlan from "../components/once/OurPlan"
import Packages from "../components/once/Packages"
import Services from "../components/once/Services"
import Sponsors from "../components/once/Sponsors"
import WhyUs from "../components/once/WhyUs"

const Home = () => {
    return (
        <div>
            <Hero />
            <WhyUs limit={4} showMoreButton />
            <Services />
            <Packages />
            <Sponsors />
            <OurPlan />
        </div>
    )
}

export default Home
