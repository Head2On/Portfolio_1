import {useRef, useEffect } from 'react'
import birdScene from '../assets_3d_portfolio/assets/3d/phoenix_bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
    const { scene, animations } = useGLTF (birdScene); 
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();
    }, []);
    
    useFrame(({ clock, camera}) => {
      // update the y  position of the bird
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
      //check if the bbird reached end  of the screen
      if(birdRef.current.position.x > camera.position.x + 10){
        //change the direction to backward   and rotate thebird 180 degrees. 
        birdRef.current.rotation.y = Math.PI;
      }else if (birdRef.current.position.x < camera.position.x - 10){
      //change the direction to forward
      birdRef.current.rotation.y = 0;
      }

      if(birdRef.current.rotation.y === 0){
        //Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01
      }else{
        //Moving Backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    });


  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}
     ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird