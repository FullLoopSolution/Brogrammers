import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from './Pages/Landing'

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto backdrop-blur-[20px]">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      

      <div className="text-sm text-white flex justify-end px-8">
        © 2025 FullLoop Solutions
      </div>
    </div>
  );
}

export default App;
