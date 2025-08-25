import { RouterProvider } from "react-router";
import router from "./routes/AppRouter";
import { Suspense, useEffect } from "react";
import Loader from "./components/common/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

    return (
      <>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </>
    );
  };

  export default App;
