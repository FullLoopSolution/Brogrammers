import "./App.css";
import { Card } from "./Components/Card";
// import { Landing } from './Pages/Landing'
import { mockGalleryData } from "./utils/mockData";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto backdrop-blur-[20px]">
      <div className="flex flex-wrap h-fit w-full justify-center items-center gap-8 ">
        {mockGalleryData?.map((item) => (
          <div
            className="w-fit min-h-full flex justify-center items-center p-8"
            key={item.id}
          >
            <Card cardData={item} />
          </div>
        ))}
      </div>

      <div className="text-sm text-white flex justify-end px-8">
        © 2025 FullLoop Solutions
      </div>
    </div>
  );
}

export default App;
