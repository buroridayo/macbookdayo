//Typed implementation
import * as THREE from "three";
import { gsap } from "gsap";
import { FadeMeshesParams, MoveGroupParams } from "./modelchange";

const ANIMATION_DURATION = 1;

export const fadeMeshes = ({ group, opacity }: FadeMeshesParams) => {
  if (!group) return;

  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) => {
          mat.transparent = true;
          gsap.to(mat, { opacity, duration: ANIMATION_DURATION });
        });
      } else if (mesh.material) {
        mesh.material.transparent = true;
        gsap.to(mesh.material, { opacity, duration: ANIMATION_DURATION });
      }
    }
  });
};

export const moveGroup = ({ group, x }: MoveGroupParams) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};
