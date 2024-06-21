/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/tifa.glb";

export function Tifa({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="PC0002_00ao_483">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PC0002_00_BodyB}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PC0002_00_BodyA}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.PC0002_00_Earring}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.PC0002_00_Eye}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.PC0002_00_Eyebrow}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.PC0002_00_Eyelash}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.PC0002_00_Hair}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.PC0002_00_Head}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.PC0002_00_Mouth}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.PC0002_00_Skin}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.WE0002_05_Body}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.WE0002_05_Materia}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <group name="PC0002_00mo_481" />
                  <group name="WE0002_05mo_482" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(scene);
