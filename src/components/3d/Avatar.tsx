"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Avatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 3);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 3;
    controls.target.set(0, 0.5, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 3, 4);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x3b82f6, 0.3);
    backLight.position.set(-2, 1, -3);
    scene.add(backLight);

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 0.2);
    rimLight.position.set(0, -1, 2);
    scene.add(rimLight);

    // Load avatar
    const loader = new GLTFLoader();
    loader.load(
      "/avatar.glb",
      (gltf: any) => {
        const avatar = gltf.scene;
        avatar.scale.set(1.2, 1.2, 1.2);
        avatar.position.y = -0.3;
        scene.add(avatar);
      },
      undefined,
      (error: any) => {
        console.error("Error loading avatar:", error);
        // Show fallback
        const geometry = new THREE.SphereGeometry(0.8, 32, 32);
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x3b82f6,
          metalness: 0.1,
          roughness: 0.3,
          clearcoat: 0.3,
          emissive: 0x3b82f6,
          emissiveIntensity: 0.1,
        });
        const fallback = new THREE.Mesh(geometry, material);
        fallback.position.y = 0.5;
        scene.add(fallback);
      }
    );

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-64 h-64 md:w-80 md:h-80 mx-auto relative"
    />
  );
}