import React, { Suspense } from "react";
import { BounceLoader } from "react-spinners";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Page_structures/Store/Store";
import Success from "./Page_structures/Success/Success";
import Cancel from "./Page_structures/Cancel/Cancel";
import Testimonial from "./Page_structures/Testimonial/Testmonial";
import Claim from "./Page_structures/Claim/Claim";
import { Analytics } from "@vercel/analytics/react";

// Lazy load all components
const Home = React.lazy(() => import("./Page_structures/Home/Home"));
const Menu = React.lazy(() => import("./Page_structures/Menu/Menu"));
const About = React.lazy(() => import("./Page_structures/About/About"));
const Member = React.lazy(() => import("./Page_structures/Member/Member"));
const Footer = React.lazy(() => import("./Page_structures/Footer/Footer"));
const Copyright = React.lazy(() =>
  import("./Page_structures/Copyright/Copyright")
);
const Cart = React.lazy(() => import("./Page_structures/Cart/Cart"));
const AboutStory = React.lazy(() =>
  import("./Page_structures/About/AboutStory")
);
const GiftCards = React.lazy(() =>
  import("./Page_structures/GiftCards/GiftCards")
);

const App = ({
  spinnerColor = "#f6a453",
  spinnerSize = 60,
  fallbackHeight = "100vh",
  fallbackWidth = "100vw",
  fallbackAlignItems = "center",
  fallbackJustifyContent = "center",
}) => {
  const fallbackStyle = {
    height: fallbackHeight,
    width: fallbackWidth,
    display: "flex",
    alignItems: fallbackAlignItems,
    justifyContent: fallbackJustifyContent,
  };

  return (
    <>
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <Home />
                  </Suspense>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <Menu />
                  </Suspense>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <About />
                  </Suspense>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <Member />
                  </Suspense>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <Testimonial />
                  </Suspense>
                  <Suspense
                    fallback={
                      <div style={fallbackStyle}>
                        <BounceLoader color={spinnerColor} size={spinnerSize} />
                      </div>
                    }
                  >
                    <Footer />
                  </Suspense>
                </div>
              }
            />
            {/* <Route
              path="/claim"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <Claim />
                </Suspense>
              }
            /> */}
            <Route
              path="/cart"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/success"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <Success />
                </Suspense>
              }
            />
            <Route
              path="/cancel"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <Cancel />
                </Suspense>
              }
            />
            <Route
              path="/barista_story"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <AboutStory />
                </Suspense>
              }
            />
            <Route
              path="/giftcards"
              element={
                <Suspense
                  fallback={
                    <div style={fallbackStyle}>
                      <BounceLoader color={spinnerColor} size={spinnerSize} />
                    </div>
                  }
                >
                  <GiftCards />
                </Suspense>
              }
            />
          </Routes>
          <Suspense
            fallback={
              <div style={fallbackStyle}>
                <BounceLoader color={spinnerColor} size={spinnerSize} />
              </div>
            }
          >
            <Copyright />
          </Suspense>
        </Router>
      </Provider>
      <Analytics />
    </>
  );
};

export default App;
