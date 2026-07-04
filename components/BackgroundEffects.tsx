export default function BackgroundEffects() {
  return (
    <>
      {/* Base - deep indigo/black */}
      <div className="absolute inset-0 bg-[#05070a] h-full" />

      {/* Main gradient - cool, deep blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(rgba(8, 12, 26, 0.95) 0%, rgba(12, 18, 32, 0.9) 30%, rgb(3, 5, 10) 70%)",
        }}
      />

      {/* Glow gradients - icy blues, Node green accent */}
      <div
        className="absolute inset-0 h-full"
        style={{
          background:
            "radial-gradient(at 80% 10%, rgba(60, 140, 230, 0.15) 0%, transparent 45%), radial-gradient(at 10% 90%, rgba(104, 159, 56, 0.08) 0%, transparent 50%), radial-gradient(at 40% 30%, rgba(30, 80, 140, 0.1) 0%, transparent 55%)",
        }}
      />

      {/* GRID - very subtle blue */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(60, 140, 230, 0.5)"
              strokeWidth="0.5"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>

      {/* Dot pattern - subtle starfield / data nodes */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjEuNSIgZmlsbD0iIzNjOGU2NiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxNSIgcj0iMSIgZmlsbD0iIzY4OUYzOCIgb3BhY2l0eT0iMC40Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI0NSIgcj0iMS41IiBmaWxsPSIjM2M4ZTY2IiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjNzg4Mjk2IiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4="")',
        }}
      ></div>
    </>
  );
}
