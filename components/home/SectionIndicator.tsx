const sectionCounter = (index: number) => {
  // add 0 if below 10
  if (index < 10) {
    return `0${index}`;
  }
  return index;
}

export default function SectionIndicator({ index, sectionTitle }: { index: number, sectionTitle: string }) {

  return (
    <p className="text-xl slashed-zero tabular-nums tracking-tight capitalize font-semibold mb-4">
      [ {sectionCounter(index)} {sectionTitle} ]
    </p>
  )
}
