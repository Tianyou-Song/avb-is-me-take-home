import React from 'react';
import './App.css';
import { World } from './components/ui/globe';
import { HeroHighlight } from './components/ui/hero-highlight';
import { TextGenerateEffect } from './components/ui/text-generate-effect';

function App() {

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <HeroHighlight
      containerClassName="h-full"
      className="h-full"
    >

      <div
        className="flex flex-col items-center justify-center w-full relative p-16"
      >

        <TextGenerateEffect
          className="text-4xl text-indigo-200"
          words="Hello World!"
        />

        <div
          className="w-full h-72"
        >
          <World
            data={[]}
            globeConfig={globeConfig}
          />
        </div>
      </div>

    </HeroHighlight>
  );
}

export default App;
