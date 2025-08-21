import { RouterProvider } from "react-router";
import router from "./routes/AppRouter";
import { Suspense } from "react";
import Loader from "./components/common/Loader";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
