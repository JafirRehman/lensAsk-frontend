import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Newsletter from "@/Components/Newsletter.jsx";
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
