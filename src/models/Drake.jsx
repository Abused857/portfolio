import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import drakeScene from '../assets/3d/drake.glb';

export function Drake  ({isRotating, ...props})  {
  const ref = useRef();
  const {scene , animations } = useGLTF(drakeScene);
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
  
      actions["Flying"].play();
    
    } else {
    
      
    
    }
    if(!isRotating){
  
      actions["Flying"].play();
    
   
    }
  }, [actions, isRotating]);

  return (
    <mesh {... props} ref={ref}>
 <primitive object = {scene} position={[-3.5, -1.3, 0.1]} scale ={[0.25, 0.25, 0.25]}/>;
    </mesh>
  )
}

