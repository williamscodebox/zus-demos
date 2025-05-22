import Content from "./components/designComponents/Content";
import Footer from "./components/designComponents/Footer";
import Header from "./components/designComponents/Header";
import Sidebar from "./components/designComponents/Sidebar";
import SplitScreen from "./components/designComponents/SplitScreen";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
