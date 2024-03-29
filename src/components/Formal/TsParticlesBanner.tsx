"use client"
import React from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const TSParticlesBanner = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id=""
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'black',
          },
        },
        fpsLimit: 1000,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 125,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#4D4D4D',
          },
          links: {
            color: '#4D4D4D',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TSParticlesBanner;
