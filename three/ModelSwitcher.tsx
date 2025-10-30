import MacbookModel14 from "@/components/models/Macbook-14";
import MacbookModel16 from "@/components/models/Macbook-16";
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { fadeMeshes, moveGroup } from "@/types/model";
import { ModelSwitcherProps } from "@/types/modelchange";

const OFFSET_DISTANCE = 5;

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const smallMacbookRef = useRef<THREE.Group>(null);
  const largeMacbookRef = useRef<THREE.Group>(null);

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup({ group: smallMacbookRef.current, x: -OFFSET_DISTANCE });
      moveGroup({ group: largeMacbookRef.current, x: 0 });

      fadeMeshes({ group: smallMacbookRef.current, opacity: 0 });
      fadeMeshes({ group: largeMacbookRef.current, opacity: 1 });
    } else {
      moveGroup({ group: smallMacbookRef.current, x: 0 });
      moveGroup({ group: largeMacbookRef.current, x: OFFSET_DISTANCE });

      fadeMeshes({ group: smallMacbookRef.current, opacity: 1 });
      fadeMeshes({ group: largeMacbookRef.current, opacity: 0 });
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 25 },
  };

  return (
    <>
      <PresentationControls>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
