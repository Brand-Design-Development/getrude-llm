interface Source {
  title: string;
  date: string;
  snippet: string;
}

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  return (
    <ul className="flex gap-2">
      {sources.map((src, i) => (
        <li
          key={i}
          className="rounded bg-[#0096d6] px-2 py-1 text-xs text-white"
        >
          <span className="font-semibold">{src.title}</span>{" "}
          <span className="opacity-80">({src.date})</span>
        </li>
      ))}
    </ul>
  );
}
