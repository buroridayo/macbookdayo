//ModelSwitcher exclusive
import * as THREE from "three";

export interface FadeMeshesParams {
  group: THREE.Object3D | null;
  opacity: number;
}

export interface MoveGroupParams {
  group: THREE.Object3D | null;
  x: number;
}

export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}
