import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

type Props = {
  children: React.ReactNode,
};

export const Background: React.FC<Props> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transaparent'
            }
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              }
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 60,
                speed: 40,
              },
            }
          },
        }}
      />
      {children}
    </>
  );
};
