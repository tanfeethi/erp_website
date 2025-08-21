import React, { useEffect, type ReactNode } from "react";

interface FullScreenLoaderProps {
  message?: ReactNode;
  subMessage?: ReactNode;
  backgroundColor?: string;
}

const FullScreenLoader = ({
  message = "جارٍ التحميل...",
  subMessage = "يرجى الانتظار قليلاً",
  backgroundColor = "bg-white",
}: FullScreenLoaderProps) => {
  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center ${backgroundColor}`}
    >
      <div className="text-center">
        <div className="mb-6">
          <div className="relative w-12 h-12 mx-auto">
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: "#13476D" }}
            ></div>
            <div
              className="relative w-12 h-12 rounded-full"
              style={{ backgroundColor: "#13476D" }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{message}</h2>
          <p className="text-gray-500">{subMessage}</p>
        </div>
      </div>
    </div>
  );
};

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [currentDemo, setCurrentDemo] = React.useState(0);

  const demos = [
    {
      component: <FullScreenLoader />,
      title: "الخلفية البيضاء الافتراضية",
    },
    {
      component: (
        <FullScreenLoader
          backgroundColor="bg-gradient-to-br from-gray-50 to-gray-100"
          message="جاري تجهيز لوحة التحكم..."
          subMessage="يتم إعداد تجربتك المخصصة"
        />
      ),
      title: "خلفية متدرجة",
    },
    {
      component: (
        <FullScreenLoader
          backgroundColor="bg-gray-900"
          message={<span className="text-white">جارٍ تحميل التطبيق...</span>}
          subMessage={
            <span className="text-gray-300">جاري تهيئة المكوّنات</span>
          }
        />
      ),
      title: "الوضع الداكن",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <div className="relative">{demos[currentDemo].component}</div>;
};

export default Loader;
