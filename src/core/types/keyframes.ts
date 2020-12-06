import { Vector3 } from "three";
import { EnvironmentState } from "./environment";

export type Keyframe = {
  label: string;
  position: Vector3;
  rotation?: number;
  scale?: number;
};

export type Keyframes = {
  getCurrent: () => Keyframe;
  setCurrent: (id: number) => void;
  frames: Keyframe[];
  currentFrame: Keyframe;
  currentIndex: number;
};

export interface KeyframeEnvironmentState extends EnvironmentState {
  keyframes: Keyframes;
}
