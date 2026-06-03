import Reveal from "./Reveal";

type Props = {
  cmd: string;
  title: string;
  subtitle?: string;
};

export default function SectionHead({ cmd, title, subtitle }: Props) {
  return (
    <Reveal className="mb-14">
      <div className="font-mono text-[13px] text-slate-500">
        <span className="text-emerald-400">$</span>{" "}
        <span className="text-slate-400">~/sabahat</span>{" "}
        <span className="text-cyan-300">{cmd}</span>
      </div>
      <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="text-slate-600">#</span>{" "}
        <span className="text-slate-100">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
          <span className="text-slate-600">//</span> {subtitle}
        </p>
      )}
    </Reveal>
  );
}
