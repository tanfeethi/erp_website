import {
    HomeOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const NotFound = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="mx-auto">
                    <div className="mb-8 relative">
                        <h1
                            className="text-9xl md:text-[12rem] font-black leading-none select-none"
                            style={{
                                background: `linear-gradient(135deg, #F19704, #d17e03)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            404
                        </h1>
                        <div
                            className="absolute inset-0 text-9xl md:text-[12rem] font-black leading-none opacity-20 blur-sm transform scale-105"
                            style={{ color: "#F19704" }}
                        >
                            404
                        </div>
                    </div>

                    <div className="mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {i18n.language === "en" ? "Page Not Found" : "الصفحة غير موجودة"}
                        </h2>
                        {i18n.language === "en" ? (
                            <p className="text-lg text-gray-600 mx-auto leading-relaxed">
                                The page you're looking for seems to have wandered off into the
                                digital void. Don't worry, it happens to the best of us!
                            </p>
                        ) : (
                            <p className="text-lg text-gray-600 mx-auto leading-relaxed">
                                يبدو أن الصفحة التي تبحث عنها غير موجودة. لا تقلق، هذا يحدث
                                لأفضلنا!
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white shadow-lg min-w-[180px] justify-center cursor-pointer"
                            style={{ backgroundColor: "#F19704" }}
                        >
                            <HomeOutlined className="text-xl" />
                            {i18n.language === "en" ? "Home" : "الصفحة الرئيسية"}
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-3 px-8 py-4 bg-white border-2 rounded-xl font-semibold text-gray-700 shadow-lg min-w-[180px] justify-center cursor-pointer"
                            style={{ borderColor: "#F19704" }}
                        >
                            {i18n.language === "en" ? (
                                <ArrowLeftOutlined className="text-xl" />
                            ) : (
                                <ArrowRightOutlined className="text-lg" />
                            )}
                            {i18n.language === "en" ? "Back" : "العودة للخلف"}
                        </button>
                    </div>

                    <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
                        {i18n.language === "en" ? (
                            <p className="text-sm text-gray-600 leading-relaxed">
                                If you believe this is an error, please contact our support team
                                or try searching for what you need. We're here to help you find
                                your way!
                            </p>
                        ) : (
                            <p className="text-sm text-gray-600 leading-relaxed">
                                إذا كنت تعتقد أن هذا خطأ، يُرجى التواصل مع فريق الدعم لدينا أو
                                البحث عمّا تحتاجه. نحن هنا لمساعدتك في إيجاد حل مناسب!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;