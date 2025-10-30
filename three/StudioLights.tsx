import { Environment, Lightformer, SpotLight } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
  return (
    <group>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -10]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <SpotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 4}
      />
      <SpotLight
        position={[0, -25, 10]}
        angle={0.15}
        decay={1}
        intensity={Math.PI * 0.3}
      />
      <SpotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.5}
        intensity={Math.PI * 0.2}
      />
    </group>
  );
};

export default StudioLights;
