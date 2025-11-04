import { useState } from "react";
import Header from "./components/Header.jsx";
import ResearchForm from "./components/ResearchForm.jsx";
import OutputTabs from "./components/OutputTabs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Header />
      <ResearchForm onGenerate={setResult} />
      <OutputTabs data={result} />
      <Footer />
    </div>
  );
}

export default App;
