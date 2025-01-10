import CallToAction from "./components/CallToAction";
import FeatureList from "./components/FeatureList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <FeatureList />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
