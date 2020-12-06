import { Vector3 } from "three";
import { KeyframeEnvironment, Background, Logo, Fog } from "spacesvr";

export default () => {
  const keyframes = [
    {
      label: "Start",
      position: new Vector3(4, 1, 4),
      rotation: Math.PI,
    },
    {
      label: "Planet View",
      position: new Vector3(3, 1, 0),
      rotation: 2 * Math.PI,
    },
    {
      label: "Around the corner",
      position: new Vector3(0, 1, 3),
      rotation: Math.PI / 2,
    },
    // {
    //   label: "So Tiny",
    //   position: new Vector3(4, 1, 4),
    // },
  ];

  return (
    <KeyframeEnvironment keyframes={keyframes}>
      <Background color={0xffffff} />
      <Logo floating rotating position={new Vector3(0, 1.25, 0)} />
      <Logo floating rotating position={new Vector3(5, 1.25, 0)} />
      <Logo floating rotating position={new Vector3(0, 1.25, 5)} />
      <Fog color={0xffffff} near={10} far={90} />
      <ambientLight />
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[200, 200]} />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </KeyframeEnvironment>
  );
};
