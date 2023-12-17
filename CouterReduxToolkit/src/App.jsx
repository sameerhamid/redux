import { useSelector } from "react-redux";
import "./App.css";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  const privacy = useSelector((state) => state.privacy);

  return (
    <div className="px-4 py-5 text-center">
      <div className="py-5">
        <Header />

        <div className="col-lg-6 mx-auto">
          <Wrapper>
            {privacy ? (
              <p className="fs-5 mb-4">Counter is Private!!</p>
            ) : (
              <DisplayCounter />
            )}
            <Controls />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default App;
