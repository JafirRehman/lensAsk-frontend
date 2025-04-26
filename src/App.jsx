import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Constants/Header.jsx";
import Footer from "./Components/Constants/Footer.jsx";
import ScrollToTop from "./Components/Constants/ScrollToTop.jsx";
import Newsletter from "./Components/Constants/Newsletter.jsx";
import { Toaster } from "react-hot-toast";
import allRoutes from "@/routes/index.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Header />
      <Routes>
        {allRoutes(user?.role)?.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
