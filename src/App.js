import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import News from "./components/news/News";
import Contact from "./Contact";
import "./index.scss";
import { Routes as Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route
        exect
        path="/"
        element={
          <div className="home page__flexblock">
            <Header />
            <section className="home__section home__section--hero">
              <Hero />
            </section>
            <News />
            <Footer />
          </div>
        }
      />

      <Route
        path="/Contact"
        element={
          <>
            <Contact />
          </>
        }
      />
    </Switch>
  );
}
export default App;
