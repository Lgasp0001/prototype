'use client'

export function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(6, 182, 212, 0.1) 100%)',
          animation: 'gradientShift 8s ease-in-out infinite',
        }}
      />

      {/* Secondary gradient for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(45deg, rgba(15, 23, 42, 0.5) 0%, rgba(6, 182, 212, 0.15) 100%)',
          animation: 'gradientShift 10s ease-in-out infinite reverse',
        }}
      />

      {/* Radial glow accent */}
      <div
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />

      {/* Animated style tag for keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background: linear-gradient(
              135deg,
              rgba(6, 182, 212, 0.1) 0%,
              rgba(15, 23, 42, 0.9) 50%,
              rgba(6, 182, 212, 0.2) 100%
            );
          }
          50% {
            background: linear-gradient(
              135deg,
              rgba(6, 182, 212, 0.3) 0%,
              rgba(15, 23, 42, 0.7) 50%,
              rgba(6, 182, 212, 0.1) 100%
            );
          }
          100% {
            background: linear-gradient(
              135deg,
              rgba(6, 182, 212, 0.1) 0%,
              rgba(15, 23, 42, 0.9) 50%,
              rgba(6, 182, 212, 0.2) 100%
            );
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
