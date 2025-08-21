interface FeatureCardProps {
    icon: string
    title: string
    description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 border border-[#13476D] rounded-lg space-y-3 h-full bg-white">
            <img src={icon} alt={title} className="w-14 h-14" />
            <h2 className="text-xl font-bold text-[#030303]">{title}</h2>
            <p className="text-sm text-[#BABABA]">{description}</p>
        </div>
    )
}

export default FeatureCard