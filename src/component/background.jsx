export default function MinimalBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50">
      {/* Soft light blobs */}
      <div className="absolute w-[480px] h-[480px] bg-blue-700/30 blur-[15px] rounded-full blob-a -top-32 -left-32" />
      <div className="absolute w-[420px] h-[420px] bg-violet-700/30 blur-[15px] rounded-full blob-b top-1/3 -right-32" />
      <div className="absolute w-[360px] h-[360px] bg-slate-900/30 blur-[10px] rounded-full blob-c bottom-0 left-1/4" />

      {/* noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>\')',
        }}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
