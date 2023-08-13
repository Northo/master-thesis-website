import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="p-8 border">
          <h1 className="capitalize text-5xl text-gray-900 font-black tracking-wider">My master thesis</h1>
          <h3 className="text-gray-400">Anomalous Thermoelectric Effect in Tilted Dirac and Weyl Semimetals</h3>
        </div>
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="sm:w-1/2 p-8">
            <h1 className="text-5xl font-extrabold tracking-wide text-gray-900">
              Energy is linear
            </h1>
            <h2 className="text-gray-500 mt-3">
              Introduction to high energy physics
            </h2>

            <div className="mt-8">
              <p>Before:</p>
              <MathJax className="m-2">
                {"\\(E_k = \\frac12 m v^2 = \\frac{p^2}{2m} \\)"}
              </MathJax>
              <p>Now:</p>
              <MathJax className="m-2">
                {"\\(E_k = \\sqrt{p^2 + m^2} \\)"}
              </MathJax>
            </div>
          </div>
          <div className="sm:w-1/2 h-44 sm:h-auto relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/space.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row-reverse bg-gray-100">
          <div className="sm:w-1/2 p-8">
            <h1 className="text-5xl font-extrabold tracking-wide text-gray-900">
              Anomalies
            </h1>
            <h2 className="text-gray-500 mt-3">
              Breaking the symmetry
            </h2>

            {/* Quote box */}
            <div className="my-4 border-l-4 border-gray-400 py-3 pl-2 bg-teal-200/20 rounded-r">
              <i>Symmetry:</i>{" "}
              an operation that leaves the laws of physics alone
            </div>

            <p>
              All symmetries gives rice to a conserved current
            </p>

            <ul className="pt-4">
              <li>Translation invariance</li>
              <li>Time translation invariance</li>
              <li>Scale invariance</li>
            </ul>

            <div className="border rounded-lg overflow-hidden p-3 pt-14 relative">
              <div className="bg-teal-200 font-bold text-lg text-gray-600 tracking-wide p-2 absolute left-0 top-0 w-full">
                🔥 Going quantum
              </div>

              When going quantum, one sometimes find classical symmetries to no
              longer be symmetries! We call this{" "}
              <span className="underline">anomalies</span>.
            </div>
          </div>
          <div className="sm:w-1/2 h-44 sm:h-auto relative shadow-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/scale.jpg"
            />
          </div>
        </div>

        <div className="bg-gray-800 shadow-t-lg shadow-gray-800/30 z-10">
          <div className="w-2/3 mx-auto py-12">
            <h2 className=" text-center text-gray-300 text-3xl pb-4 font-bold tracking-wide">
              Aren't you doing{" "}
              <span className="underline decoration-4 decoration-teal-600">
                condensed matter
              </span>{" "}
              physics?
            </h2>
            <div>
              <img src="/cones-types.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
