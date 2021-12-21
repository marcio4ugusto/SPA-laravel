import React from "react";

import Laravel from "../components/Laravel";
import Inertia from "../components/Inertia";
import Tailwind from "../components/Tailwind";

function Home() {
  return (
    <div className="flex flex-row justify-around items-center w-1/3 h-screen mx-auto">
      <Laravel />+<Inertia />+<Tailwind />
    </div>
  );
}

export default Home;
