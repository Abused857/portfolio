import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import { Bird, Island, Drake, Sky } from "../models";
import { soundoff, soundon } from "../assets/icons";
import HomeInfo from "../components/HomeInfo";
import kenshin from "../assets/kenshin.mp3";

{
}

const Home = () => {
  const audioRef = useRef(new Audio(kenshin));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3.5, -10];
    let rotation = [0.3, 6.4, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [0.1, 0.1, 0.1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustDrakeScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandScreenSize();
  const [drakeScale, drakePosition] = adjustDrakeScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.2, 6.5, 0]}
            scale={islandScale}
          />
          <Drake
            isRotating={isRotating}
            Position={drakePosition}
            Scale={drakeScale}
            rotation={[0, 1.5, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
