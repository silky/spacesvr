import { Vector3 } from "three";
import { StandardEnvironment, Background, Logo, Networked } from "spacesvr";

export default () => {
  return (
    <StandardEnvironment player={{ pos: new Vector3(5, 1, 0), rot: Math.PI }}>
      <Background color={0xffffff} />
      <Networked positon rotation>
        <Logo floating rotating position={new Vector3(0, 1.25, 0)} />
      </Networked>
      <fog attach="fog" args={[0xffffff, 10, 90]} />
      <ambientLight />
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[200, 200]} />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </StandardEnvironment>
  );
};
