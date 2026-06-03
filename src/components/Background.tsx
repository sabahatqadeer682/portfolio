export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="bg-scanlines absolute inset-0 opacity-40" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-32 h-[440px] w-[440px] rounded-full bg-emerald-500/18 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="absolute top-2/3 right-1/4 h-[360px] w-[360px] rounded-full bg-pink-500/12 blur-[140px]" />
    </div>
  );
}
