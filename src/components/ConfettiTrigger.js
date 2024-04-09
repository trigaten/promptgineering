import React from 'react';
import confetti from 'canvas-confetti';

const ConfettiTrigger = () => {
    const imagePath = '/img/clap-icon.png'; // 固定的图片路径
    const onClap = () => {
        confetti({
        particleCount: 200,
        startVelocity: 30,
        angle: 90,
        spread: 120,
        ticks: 300,
        gravity: 0.5,
        origin: {
            x: 0.5,
            y: 0.5
        }
        });
    };

    return (
        <div style={{ textAlign: 'center' }}>
        <img src={imagePath} aonClick={onClap} style={{ cursor: 'pointer', borderRadius: '50%', width: '100px', height: '100px' }} />
        </div>
    );
};

export default ConfettiTrigger;