import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function CoffeeCup() {
  const cupRef = useRef<THREE.Group>(null);

  // Create a profile for the cup using LatheGeometry
  const points = useMemo(() => {
    const p = [];
    // Bottom
    p.push(new THREE.Vector2(0, 0));
    p.push(new THREE.Vector2(0.5, 0));
    // Outer wall curve
    for (let i = 0; i <= 10; i++) {
      const y = i * 0.15;
      const x = 0.5 + Math.pow(i / 10, 1.5) * 0.3;
      p.push(new THREE.Vector2(x, y));
    }
    // Rim
    const topX = 0.8;
    const topY = 1.5;
    p.push(new THREE.Vector2(topX + 0.05, topY));
    p.push(new THREE.Vector2(topX + 0.05, topY + 0.05));
    p.push(new THREE.Vector2(topX - 0.05, topY + 0.05));
    // Inner wall
    for (let i = 10; i >= 0; i--) {
      const y = i * 0.15 + 0.1; // Slightly higher bottom inside
      const x = 0.45 + Math.pow(i / 10, 1.5) * 0.3;
      p.push(new THREE.Vector2(x, y));
    }
    p.push(new THREE.Vector2(0, 0.1));
    return p;
  }, []);

  return (
    <group ref={cupRef}>
      {/* Cup Body */}
      <mesh position={[0, -0.75, 0]} castShadow receiveShadow>
        <latheGeometry args={[points, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.05} 
          metalness={0.1} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Handle */}
      <mesh position={[0.75, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.35, 0.08, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.1} />
      </mesh>
      
      {/* Coffee Surface */}
      <mesh position={[0, 0.5, 0]} receiveShadow>
        <cylinderGeometry args={[0.7, 0.65, 0.05, 32]} />
        <meshStandardMaterial 
          color="#3e2723" 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>

      {/* Plate/Saucer */}
      <mesh position={[0, -0.78, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.2, 0.8, 0.1, 64]} />
        <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.1} />
      </mesh>
    </group>
  );
}

function CoffeeBean({ position, rotation, scale }: { position: [number, number, number], rotation: [number, number, number], scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={meshRef} castShadow scale={[1, 0.6, 0.7]}>
        {/* Coffee bean shape: flattened sphere */}
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#4e342e" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Small crease detail */}
      <mesh position={[0, 0, 0.08]} scale={[0.02, 0.2, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#2b1d1a" />
      </mesh>
    </group>
  );
}

function Beans() {
  const beans = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4
        ] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
        scale: Math.random() * 0.4 + 0.6
      });
    }
    return temp;
  }, []);

  return (
    <>
      {beans.map((bean, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <CoffeeBean {...bean} />
        </Float>
      ))}
    </>
  );
}

export default function CoffeeScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={45} />
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        
        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <CoffeeCup />
          </Float>
        </PresentationControls>
        
        <Beans />
        
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  );
}
