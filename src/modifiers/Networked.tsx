import { Children, ReactNode, useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { Group, Quaternion, Vector3 } from "three";
import { useEnvironment } from "../core";

type NetworkedProps = {
  children: ReactNode;
};

/**
 *
 * This component adds networking capabilities to any 3d object.
 *
 * @param props
 * @constructor
 */
export const Networked = (props: NetworkedProps) => {
  const { children } = props;

  const { simulation } = useEnvironment();
  const [id, setId] = useState<number>();
  const [added, setAdded] = useState(false);
  const group = useRef<Group>();
  const position = useRef(new Vector3());
  const quaternion = useRef(new Quaternion());

  // atomic add to simulation operation
  useEffect(() => {
    if (!added && simulation) {
      setId(simulation.addIdea());
      setAdded(true);
    }
  }, [added, simulation]);

  useFrame(({ clock }) => {
    if (
      group.current &&
      group.current.children &&
      group.current.children[0] &&
      group.current.children[0].children
    ) {
      group.current.children[0].children[0].getWorldPosition(position.current);
      group.current.children[0].children[0].getWorldQuaternion(
        quaternion.current
      );

      console.log(position.current);
    }
  });

  const firstChild = Children.map(children, (Child, i) => i === 0 && Child);

  return <group ref={group}>{firstChild && firstChild[0]}</group>;
};
