import { useEffect, useState } from "react";
import "./App.css";

import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg2">
        <p className="text-xl font-bold text-heading">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <Banner />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
