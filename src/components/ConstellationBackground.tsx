import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ConstellationBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 500;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouchDevice ? 1 : 1.5));
    container.appendChild(renderer.domElement);

    // Create a circular glow texture
    const createCircleTexture = (color: string) => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Brilliant white center
        gradient.addColorStop(0.1, 'rgba(255, 255, 255, 1)'); // Maintain white core
        gradient.addColorStop(0.2, color); // Inner glow
        gradient.addColorStop(0.5, color); // Outer glow
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    };

    const starTexture = createCircleTexture('rgba(168, 85, 247, 0.9)'); // vibrant lilac neon
    const whiteTexture = createCircleTexture('rgba(214, 158, 255, 0.7)'); // light lilac glow 

    // Particles (Constellation Stars)
    const starCount = isTouchDevice ? 60 : 120; 
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const initialPositions = new Float32Array(starCount * 3);
    const movementOffsets = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 1000;
        const y = (Math.random() - 0.5) * 1000;
        const z = (Math.random() - 0.5) * 1000;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        initialPositions[i * 3] = x;
        initialPositions[i * 3 + 1] = y;
        initialPositions[i * 3 + 2] = z;
        movementOffsets[i * 3] = Math.random() * Math.PI * 2;
        movementOffsets[i * 3 + 1] = Math.random() * Math.PI * 2;
        movementOffsets[i * 3 + 2] = Math.random() * Math.PI * 2;
        starSpeeds[i] = 0.4 + Math.random() * 0.6;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 25, 
        map: starTexture,
        transparent: true,
        opacity: 1.0, 
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const starField = new THREE.Points(geometry, starMaterial);
    scene.add(starField);

    // Floating white stars background
    const bgStarCount = isTouchDevice ? 100 : 300; 
    const bgGeometry = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(bgStarCount * 3);
    const bgVelocities = new Float32Array(bgStarCount * 3);

    for (let i = 0; i < bgStarCount; i++) {
        bgPositions[i * 3] = (Math.random() - 0.5) * 2000;
        bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 1200;
        bgVelocities[i * 3] = (Math.random() - 0.5) * 0.05; 
        bgVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05;
        bgVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    }
    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    const bgStarMaterial = new THREE.PointsMaterial({
        size: 5,
        map: whiteTexture,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const bgStarField = new THREE.Points(bgGeometry, bgStarMaterial);
    scene.add(bgStarField);

    // Nebula Clouds
    const nebulaCount = 15;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount; i++) {
        nebulaPositions[i * 3] = (Math.random() - 0.5) * 1800;
        nebulaPositions[i * 3 + 1] = (Math.random() - 0.5) * 1800;
        nebulaPositions[i * 3 + 2] = (Math.random() - 0.5) * 800;
    }
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    const nebulaMaterial = new THREE.PointsMaterial({
        size: 1000,
        map: starTexture,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        color: Math.random() > 0.5 ? 0xA855F7 : 0x9333EA
    });
    const nebulaField = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebulaField);

    // Constellations
    const lineIndices: number[] = [];
    const connectionsSet = new Set<string>();

    for (let i = 0; i < starCount; i++) {
        const maxConnections = Math.random() > 0.8 ? 2 : 1; 
        const distances = [];
        for (let j = 0; j < starCount; j++) {
            if (i === j) continue;
            const dx = initialPositions[i * 3] - initialPositions[j * 3];
            const dy = initialPositions[i * 3 + 1] - initialPositions[j * 3 + 1];
            const dz = initialPositions[i * 3 + 2] - initialPositions[j * 3 + 2];
            distances.push({ index: j, dist: dx * dx + dy * dy + dz * dz });
        }
        distances.sort((a, b) => a.dist - b.dist);

        let count = 0;
        for (let k = 0; k < distances.length && count < maxConnections; k++) {
            const j = distances[k].index;
            if (distances[k].dist > 180 * 180) continue; 
            
            const key = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (!connectionsSet.has(key)) {
                connectionsSet.add(key);
                lineIndices.push(i, j);
                count++;
            }
        }
    }

    const lineGeometry = new THREE.BufferGeometry();
    const initialLinePositions = new Float32Array(lineIndices.length * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(initialLinePositions, 3));
    
    // Main vibrant lilac neon line
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xA855F7, 
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(constellationLines);

    // Inner brighter core line for glow
    const coreLineGeometry = lineGeometry.clone();
    const coreLineMaterial = new THREE.LineBasicMaterial({
        color: 0xdb2777, // Vibrant magenta core
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const coreConstellationLines = new THREE.LineSegments(coreLineGeometry, coreLineMaterial);
    scene.add(coreConstellationLines);

    // Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let requestRef = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - window.innerWidth / 2) / 100;
        mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    if (!isTouchDevice) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
        requestRef = requestAnimationFrame(animate);

        const positionAttribute = starField.geometry.getAttribute('position') as THREE.BufferAttribute;
        const bgPositionAttribute = bgStarField.geometry.getAttribute('position') as THREE.BufferAttribute;
        const linePosAttr = constellationLines.geometry.getAttribute('position') as THREE.BufferAttribute;
        const coreLinePosAttr = coreConstellationLines.geometry.getAttribute('position') as THREE.BufferAttribute;
        
        const time = Date.now() * 0.001;

        // Oscillate foreground stars around initial positions
        for (let i = 0; i < starCount; i++) {
            const s = starSpeeds[i];
            const px = initialPositions[i * 3] + Math.sin(time * 0.4 * s + movementOffsets[i * 3]) * 40;
            const py = initialPositions[i * 3 + 1] + Math.cos(time * 0.3 * s + movementOffsets[i * 3 + 1]) * 40;
            const pz = initialPositions[i * 3 + 2] + Math.sin(time * 0.5 * s + movementOffsets[i * 3 + 2]) * 40;

            positionAttribute.setXYZ(i, px, py, pz);
        }

        // Map star positions to line positions based on fixed indices
        for (let i = 0; i < lineIndices.length; i++) {
            const starIndex = lineIndices[i];
            const px = positionAttribute.getX(starIndex);
            const py = positionAttribute.getY(starIndex);
            const pz = positionAttribute.getZ(starIndex);
            
            linePosAttr.setXYZ(i, px, py, pz);
            coreLinePosAttr.setXYZ(i, px, py, pz);
        }
        
        // Move background stars
        for (let i = 0; i < bgStarCount; i++) {
            const bpx = bgPositionAttribute.getX(i) + bgVelocities[i * 3];
            const bpy = bgPositionAttribute.getY(i) + bgVelocities[i * 3 + 1];
            const bpz = bgPositionAttribute.getZ(i) + bgVelocities[i * 3 + 2];

            bgPositionAttribute.setXYZ(i, bpx, bpy, bpz);

            if (Math.abs(bpx) > 1000) bgVelocities[i * 3] *= -1;
            if (Math.abs(bpy) > 1000) bgVelocities[i * 3 + 1] *= -1;
            if (Math.abs(bpz) > 500) bgVelocities[i * 3 + 2] *= -1;
        }

        positionAttribute.needsUpdate = true;
        bgPositionAttribute.needsUpdate = true;
        linePosAttr.needsUpdate = true;
        coreLinePosAttr.needsUpdate = true;

        // Twinkling effect
        const twinkleTime = Date.now() * 0.002;
        starMaterial.size = 25 + Math.sin(twinkleTime) * 3;
        starMaterial.opacity = 0.9 + Math.sin(twinkleTime * 1.5) * 0.1;

        targetRotationX.current += (mouseY * 0.1 - targetRotationX.current) * 0.05;
        targetRotationY.current += (mouseX * 0.1 - targetRotationY.current) * 0.05;

        starField.rotation.x = targetRotationX.current;
        starField.rotation.y = targetRotationY.current;
        bgStarField.rotation.x = targetRotationX.current * 0.5;
        bgStarField.rotation.y = targetRotationY.current * 0.5;
        constellationLines.rotation.x = targetRotationX.current;
        constellationLines.rotation.y = targetRotationY.current;
        coreConstellationLines.rotation.x = targetRotationX.current;
        coreConstellationLines.rotation.y = targetRotationY.current;

        nebulaField.rotation.y += 0.0005;
        nebulaField.rotation.x += 0.0002;

        renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(requestRef);
        if (!isTouchDevice) {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        window.removeEventListener('resize', handleResize);
        container.removeChild(renderer.domElement);
        scene.clear();
        renderer.dispose();
        geometry.dispose();
        bgGeometry.dispose();
        coreLineGeometry.dispose();
        lineGeometry.dispose();
        starTexture?.dispose();
        whiteTexture?.dispose();
        starMaterial.dispose();
        bgStarMaterial.dispose();
        lineMaterial.dispose();
        coreLineMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
