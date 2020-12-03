import { useCallback, useRef, useState } from "react";
import { Simulation, SimulationState } from "../types/simulation";

export const useSimulation = (): Simulation => {
  const [isHost, setIsHost] = useState(false);
  const [localState, setLocalState] = useState([] as SimulationState);
  const remoteState = useRef([] as SimulationState);

  const addIdea = useCallback(
    (prefix = 0): number => {
      let id = prefix * 100;
      while (!localState.filter((idea) => idea.id === id)) {
        id++;
      }
      setLocalState([...localState, { id }]);
      return id;
    },
    [localState]
  );

  // // upstream
  // const pushState = useCallback(() => {
  //   let diff = [] as SimulationState;
  //
  //   for (const idea of localState) {
  //   }
  // }, [localState]);
  //
  // // downstream
  // const pullState = useCallback(() => {
  //   let modLocalState = [...localState];
  //   for (const idea of remoteState.current) {
  //
  //   }
  // }, [localState]);

  return { localState, addIdea };
};

// fake sending to host
export const sendState = (changedState: SimulationState) => {
  if (!changedState) {
    return;
  }

  console.log("changed the following state: " + JSON.stringify(changedState));
};

// fake fetching from host
export const fetchState = (): SimulationState => {
  const receivedState: SimulationState = [
    { id: 102, position: [Math.sin(3) * 5, 2, Math.cos(3) * 5] },
  ];

  return receivedState;
};
