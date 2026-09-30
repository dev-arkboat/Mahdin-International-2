import confetti from 'canvas-confetti';

export const triggerBookingSuccessConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#3b82f6', '#10b981', '#f59e0b']
  });
};

export const triggerServiceCompletedConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.5 },
    colors: ['#10b981', '#34d399', '#6ee7b7']
  });
};
