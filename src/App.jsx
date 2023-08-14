import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./App.css";

import SpaceUrl from "./assets/space.jpg"
import ScaleUrl from "./assets/scale.jpg"
import ConesTiltUrl from "./assets/cones-tilt.png"
import ConesTypesUrl from "./assets/cones-types.png"
import LuttingerUrl from "./assets/luttinger.png"
import MasterUrl from "./assets/master.png"
import DispersionUrl from "./assets/dispersion.svg"

const Section = ({ image, objectContain, isReverse, children }) => (
  <div
    className={`flex flex-col shadow-lg ${
      isReverse ? "sm:flex-row" : "sm:flex-row-reverse"
    }`}
  >
    <div className="sm:w-1/2 h-44 sm:h-auto relative">
      <img
        className={`absolute inset-0 w-full h-full ${
          objectContain ? "object-contain" : "object-cover"
        }`}
        src={image}
      />
    </div>
    {children &&
      (
        <div className="sm:w-1/2 p-8">
          {children}
        </div>
      )}
  </div>
);

function SectionTitle({ title, subtitle }) {
  return (
    <>
      <h1 className="capitalize text-5xl text-gray-900 font-black tracking-wider">
        {title}
      </h1>
      <h3 className="text-gray-400">
        {subtitle}
      </h3>
    </>
  );
}

function App() {
  return (
    <>
      <div className="flex flex-col bg-gray-50">
        <div className="p-8 border">
          <h1 className="capitalize text-5xl text-gray-900 font-black tracking-wider">
            My master thesis
          </h1>
          <h3 className="text-gray-400">
            Anomalous Thermoelectric Effect in Tilted Dirac and Weyl Semimetals
          </h3>
        </div>
        <Section image={SpaceUrl}>
          <SectionTitle
            title="Energy is linear"
            subtitle="Introduction to high energy physics"
          />
          <div className="mt-8">
            <p>We're used to energy being quadratic in velocity (momentum):</p>
            <MathJax className="m-2">
              {"\\(E_k = \\frac12 m v^2 = \\frac{p^2}{2m} \\)"}
            </MathJax>
            <p>However, special relativity tells us that</p>
            <MathJax className="m-2">
              {"\\(E_k = \\sqrt{p^2 + m^2} \\)"}
            </MathJax>
            <p>
              The interesting part of this, is if we make the momentum really
              small, we have approximately the same quadratic expression as
              before. When going to very high velocities, i.e. large momentum,
              the relativistic part dominaties, and we have
            </p>
            <MathJax className="m-2">
              {"\\(E_k \\approx p.  \\)"}
            </MathJax>

            <img src={DispersionUrl} />
          </div>
        </Section>
        <Section image={ScaleUrl} isReverse>
          <SectionTitle title="Anomalies" subtitle="Breaking the symmetry" />

          {/* Quote box */}
          <div className="my-4 border-l-4 border-gray-400 py-3 pl-2 bg-teal-200/20 rounded-r">
            <i>Symmetry:</i> an operation that leaves the laws of physics alone
          </div>

          <p>
            All symmetries gives rise to a conserved current. For example
          </p>

          <ul className="pt-4 list-disc list-inside">
            <li>Translation invariance : conservation of momentum</li>
            <li>Time translation invariance : conservation of energy</li>
            <li>Scale invariance : conservation of the dilation current</li>
          </ul>

          <div className="border rounded-lg overflow-hidden p-3 pt-14 relative my-4">
            <div className="bg-teal-200 font-bold text-lg text-gray-600 tracking-wide p-2 absolute left-0 top-0 w-full">
              🔥 Going quantum
            </div>

            When going quantum, one sometimes find classical symmetries to no
            longer be symmetries! We call this{" "}
            <span className="underline">anomalies</span>.
          </div>

          In fact, the scale invariance is broken by the scale anomaly (due to
          renormalization). This makes the dilation current conservation no
          longer protected by symmetry. However, it is in fact conserved in flat
          spacetime - but not so in curved spacetime.
        </Section>

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
              <img src={ConesTypesUrl} />
            </div>
          </div>
        </div>

        <Section image={ConesTypesUrl} objectContain>
          <SectionTitle
            title="Weyl Semimetals"
            subtitle="Relativistic particles at slow speeds"
          />

          <p>Emergent particles behaving like massless fermions</p>
          Remember
          <MathJax className="m-2">
            {"\\(E_k = \\sqrt{p^2 + m^2} \\)"}
          </MathJax>

          We thus get particles behaving as if they were relativistic, but at
          lower speeds.
          <br />

          <span className="text-xl">💁</span> The math is the same, so we should also see the same effects as we see
          in high energy.
        </Section>

        <Section isReverse image={LuttingerUrl}>
          <SectionTitle
            title="Luttinger's trick"
            subtitle="Trading temperature for gravity"
          />

          Temperature gradients are by their very nature non-equilibrium
          phenomena. That makes them terribly difficult to work with.
          <br />

          In come Luttinger; he proposed that we introduce a fictitious
          gravitational field that oppose the temperature gradient. We now have
          an equilibrium state.
          <br />

          Remove the temperature gradient and flip the gravitational gradient,
          and we have the same behaviour as before - but now it is curved
          spacetime, not temperature, that drives!

          <div className="border rounded-lg overflow-hidden p-3 pt-14 relative my-4">
            <div className="bg-teal-200 font-bold text-lg text-gray-600 tracking-wide p-2 absolute left-0 top-0 w-full">
              🔥 Curved spacetime
            </div>

            <div className="mb-4">Gravity is nothing more than curved spacetime!</div>

            <div>Recall from above that in curved spacetime, the dilation current is not conserved!</div>
          </div>
        </Section>

        <div className="shadow p-12">
          <div className="max-w-md mx-auto">
            <SectionTitle
              title={
                <>
                  Tying it <span className="underline">together</span>
                </>
              }
            />

            <p className="mt-4">We now have all the ingredients we need</p>

            <div class="flex items-center my-4">
              <input id="default-checkbox" type="checkbox" checked />
              <label
                for="default-checkbox"
                class="ml-2 text-sm text-gray-900"
              >
                Energy linear in momentum (velocity)
              </label>
            </div>
            <div class="flex items-center my-4">
              <input id="default-checkbox" type="checkbox" checked />
              <label
                for="default-checkbox"
                class="ml-2 text-sm text-gray-900"
              >
                Non-flat spacetime (gravity)
              </label>
            </div>

            From high energy physics, we know that the afformentioned scale
            anomaly gives rise to some interesting effects in curved spacetime.
            We can now get those same effects in Dirac and Weyl semimetals!
            <br />
            <div className="text-sm text-gray-700 mt-6">
              In fact, we can go beyond what is possible in high energy physics!
            </div>
          </div>
        </div>

        <Section image={ConesTiltUrl}>
          <SectionTitle
            title="Breaking the isotropy"
            subtitle="Tilting the cone"
          />

          In high energy physics, isotropy is fundamentally required - we
          believe no direction in our universe to be special! In our emergent
          theory, however, no such symmetry protection exists.

          <p>{"->"} We can tilt our cones, and see what happens</p>

          <div className="border rounded-lg overflow-hidden p-3 pt-14 relative my-4">
            <div className="bg-teal-200 font-bold text-lg text-gray-600 tracking-wide p-2 absolute left-0 top-0 w-full">
              🔥 Backwards in time!
            </div>

            Doing this in high energy physics would mean particles could move
            backwards in time; completely nonsensical!
          </div>
        </Section>

        <Section image={MasterUrl}>
          <SectionTitle
            title="In detail"
            subtitle="For those who'd like the details"
          />

          <p className="my-8">
          If you'd like all the details, check out the thesis and paper!
          </p>

          <div className="flex gap-4 my-4 h-24 text-center text-lg font-thin">
          {[[
            "https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3015247",
            "Thesis",
          ], [
            "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.014410",
            "Paper",
          ]].map(
            ([url, name]) => (
              <a
                href={url}
                target="_blank"
                className="hover:ring-2 w-1/2 p-2 ring-1 ring-gray-200 rounded shadow flex flex-col justify-center bg-green-200"
              >
                <span>{ name }</span>
              </a>
            ),
          )}
          </div>
        </Section>
        <div className="h-24" /> 
      </div>
    </>
  );
}

export default App;
