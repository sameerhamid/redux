import "./App.css";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="px-4 py-5 text-center">
      <div className="py-5">
        <Header />

        <div className="col-lg-6 mx-auto">
          <Wrapper>
            <DisplayCounter />
            <Controls />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default App;
