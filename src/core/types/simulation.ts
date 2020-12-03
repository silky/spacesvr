// unique id for each idea
// players are 1xx
// everything else is 0xx

export type IdeaState = {
  id: number;
  position?: [number, number, number];
  quaternion?: [number, number, number, number];
  flag?: boolean;
  value?: number;
};

export type SimulationState = IdeaState[];

export type Simulation = {
  localState: SimulationState;
  addIdea: (prefix?: number) => number;
};
