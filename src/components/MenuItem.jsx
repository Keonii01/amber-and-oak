const tagTone = {
  warm: "bg-secondary-container/30 text-on-secondary-container",
  plain: "bg-surface-container text-on-surface-variant",
  green: "bg-tertiary-fixed text-on-tertiary-fixed",
};

export default function MenuItem({ item }) {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-surface hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <span className="font-title-md text-title-md text-on-surface">{item.name}</span>
        <span className="shrink-0 font-label-lg text-label-lg text-primary bg-primary-fixed px-2.5 py-0.5 rounded-full">
          {item.price}
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
      <div className="flex flex-wrap items-center gap-1.5 mt-3">
        {item.tags.map((tag) => (
          <span
            key={tag.label}
            className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full ${tagTone[tag.tone]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}