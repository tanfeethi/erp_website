import WrapperContainer from "../common/WrapperContainer"
import Header from "../common/Header"

const ContactForm = () => {
    return (
        <div className="border-b-[#E2E2E2]">
            <WrapperContainer>
                <div className="py-20">
                    <Header
                        title="فريقنا جاهز لمساعدتك والإجابة على كل استفساراتك، تواصل معنا الآن لنبدأ معًا رحلتك نحو إدارة أسهل وأكثر كفاءة لأعمالك."
                        description="ابدأ حديثك"
                        subtitle="معنا الآن"
                    />

                    <div className="grid md:grid-cols-2 gap-10 mt-14 items-start">
                        <form className="w-full flex flex-col h-full">
                            <div className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="font-medium text-[#030303]">الاسم الأول</label>
                                        <input
                                            type="text"
                                            placeholder="أدخل اسمك الأول هنا"
                                            className="border border-[#E0E0E0] rounded px-4 py-2 text-sm text-right placeholder-[#BABABA] text-[#030303]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-medium text-[#030303]">الاسم الأخير</label>
                                        <input
                                            type="text"
                                            placeholder="أدخل اسمك الأخير هنا"
                                            className="border border-[#E0E0E0] rounded px-4 py-2 text-sm text-right placeholder-[#BABABA] text-[#030303]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="font-medium text-[#030303]">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            placeholder="أدخل بريدك الإلكتروني هنا"
                                            className="border border-[#E0E0E0] rounded px-4 py-2 text-sm text-right placeholder-[#BABABA] text-[#030303]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-medium text-[#030303]">رقم الجوال</label>
                                        <input
                                            type="tel"
                                            placeholder="أدخل رقم جوالك هنا"
                                            className="border border-[#E0E0E0] rounded px-4 py-2 text-sm text-right placeholder-[#BABABA] text-[#030303]"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="font-medium text-[#030303]">الرسالة</label>
                                    <textarea
                                        placeholder="أدخل رسالتك هنا.."
                                        className="border border-[#E0E0E0] rounded px-4 py-2 text-sm text-right placeholder-[#BABABA] text-[#030303] min-h-[120px]"
                                    />
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <button
                                    type="submit"
                                    className="bg-[#13476D] text-white px-10 py-2 rounded"
                                >
                                    إرسال
                                </button>
                            </div>
                        </form>

                        <div className="relative w-full h-[700px] rounded-lg overflow-hidden">
                            <img
                                src="/assets/contact/contactImg.jpg"
                                alt="Contact"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="/assets/ErpLoaderLogo.png"
                                alt="Overlay Logo"
                                className="absolute inset-0 m-auto opacity-20 max-w-[70%] max-h-[70%] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </div>
    )
}

export default ContactForm;