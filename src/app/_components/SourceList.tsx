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
    <div className="flex gap-1">
      {sources.map((src, i) => (
        <span
          key={i}
          className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700"
          title={`${src.title} (${src.date}): ${src.snippet}`}
        >
          {src.title}
        </span>
      ))}
    </div>
  );
}
