interface FeatureCardProps {
    icon: string
    title: string
    description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div
            className="group flex flex-col items-center text-center p-6 border border-[#13476D] rounded-lg space-y-3 h-full bg-white
            hover:bg-[#13476D] hover:text-[#fcfcfc] transition-colors duration-300"
        >
            <div
                className="w-14 h-14 flex items-center justify-center transition-all duration-300
                group-hover:bg-white group-hover:rounded-full"
            >
                <img src={icon} alt={title} className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default FeatureCard;