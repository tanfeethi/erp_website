import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import WrapperContainer from '../common/WrapperContainer';
import { Link } from 'react-router';

const Footer = () => {
  const { t, i18n } = useTranslation('footer');
  const isArabic = i18n.language === 'ar';

  return (
    <footer
      className="relative text-white text-sm bg-[#081C2B] bg-blend-hard-light bg-opacity-30 bg-cover bg-center py-8"
      style={{ backgroundImage: 'url(/footer-bg.png)' }}
    >
      <div className="absolute inset-0 bg-[#081C2B] opacity-30 pointer-events-none z-0"></div>

      <WrapperContainer>
        <div className="relative z-10 flex flex-col gap-10">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div className="space-y-4">
              <img src="/assets/ERPWhite.png" alt="ERPWhite.png" className='w-24 h-14' />
              <p className="text-sm leading-relaxed">
                تحكّم في جميع جوانب عملك من مكان واحد، مع نظام إدارة متكامل يوفر لك أدوات متطورة لإدارة الموظفين، متابعة المهام، تتبع الأداء، وإصدار التقارير الذكية، مما يضمن لك الكفاءة، النمو، واستمرارية أعمالك بكل سهولة واحترافية
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="link link-hover">{t('home')}</Link></li>
                <li><Link to="/systems" className="link link-hover">{t('systems')}</Link></li>
                <li><Link to="/features" className="link link-hover">{t('features')}</Link></li>
                <li><Link to="/contact-us" className="link link-hover">{t('contact')}</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">{t('contactUs')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaEnvelope className="mt-1" />
                  <span>info@jec.sa</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaPhone className="mt-1" />
                  <span>0133500141</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1" />
                  <span>{t('addressDetails')}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold">
                {t('subscribeTitle')}
              </h3>
              <input
                type="email"
                placeholder="ادخل بريدك الالكتروني"
                className="w-full border border-[#BABABA] rounded px-4 py-2 text-white placeholder:text-sm"
              />
              <button className="bg-[#FCFCFC] text-[#13476D] font-semibold px-4 py-2 rounded w-fit">
                {t('subscribeBtn')}
              </button>
            </div>
          </div>

          <div className={`flex flex-wrap items-center gap-4 ${isArabic ? 'text-right' : 'text-left'}`}>
            <p className="text-white">{t('followUs')}</p>
            <div className="flex gap-3">
              {[FaInstagram, FaLinkedin, FaFacebook].map((Icon, index) => (
                <div key={index} className="bg-[#FCFCFC] p-2 rounded border border-gray-300">
                  <Icon className="text-[#13476D]" size={18} />
                </div>
              ))}
            </div>
          </div>

          <hr className="border-[#FCFCFC]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs text-white">
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="underline">شروط الاستخدام</a>
              <a href="#" className="underline">سياسة الخصوصية</a>
            </div>

            <div className="text-center">
              {t('copyright')} 2025 JEC ERP ©. 
            </div>

            <div className="flex justify-center md:justify-end">
              <img src="/assets/ERPWhite.png" alt="ERPWhite.png" className='w-20 h-10' />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </footer>
  );
};

export default Footer;