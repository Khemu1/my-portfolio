export default function BackgroundEffects() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#0b0816] h-full" />

      {/* Main gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(rgba(38, 21, 67, 0.9) 0%, rgba(48, 22, 94, 0.8) 30%, rgb(12, 10, 26) 65%);",
        }}
      />

      {/* Glow gradients */}
      <div
        className="absolute inset-0 h-full"
        style={{
          background:
            "radial-gradient(at 70% 20%, rgba(140, 85, 255, 0.25) 0%, transparent 40%), radial-gradient(at 15% 75%, rgba(90, 30, 150, 0.2) 0%, transparent 45%), radial-gradient(at 85% 80%, rgba(170, 120, 255, 0.18) 0%, transparent 35%);",
        }}
      />

      {/* GRID – placed ABOVE gradients */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="white"
              stroke-width="0.5"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>

      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIxNCIgY3k9IjciIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+&quot;);",
        }}
      ></div>
    </>
  );
}
