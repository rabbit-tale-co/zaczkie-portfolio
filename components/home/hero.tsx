import Image from "next/image";
import heroImage from "@/public/vercel.svg";

const counters = [
  {
    label: "Projects",
    value: 10,
  },
  {
    label: "Projects",
    value: 10,
  },
  {
    label: "Projects",
    value: 10,
  },
];

export const Counter = ({ label, value }: { label: string, value: number }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-4xl font-bold">{value}</p>
      <h2 className="text-2xl text-muted-foreground">{label}</h2>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="flex h-fit justify-center gap-10 w-full">
      {/* left */}
      <div className="w-3/5 flex flex-1 flex-col justify-between gap-4 py-6">
        <h1 className="text-8xl font-bold">Hero</h1>
        <div className="flex gap-10">
          {/* left */}
          <div className="flex gap-4">
            {counters.map((counter, index) => (
              <Counter key={`${counter.label}-${index}`} label={counter.label} value={counter.value} />
            ))}
          </div>
          {/* right */}
          {/* <div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil officiis perspiciatis modi labore deleniti impedit? Voluptatum vitae dolore ex perferendis, quia exercitationem hic, inventore, doloribus optio culpa quisquam non.
            </p>
          </div> */}
        </div>
      </div>
      {/* right */}
      <div className="w-2/5 h-full flex flex-col gap-6 py-6">
        {/* <h1 className="text-4xl font-bold">Hero</h1> */}
        {/* <Image className="self-center size-64 fill-red-500" src={heroImage} alt="Hero" /> */}
        <svg className="size-64 self-center" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#000" /></svg>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Hero</h1>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil officiis perspiciatis modi labore deleniti impedit? Voluptatum vitae dolore ex perferendis, quia exercitationem hic, inventore, doloribus optio culpa quisquam non.
          </p>
        </div>
      </div>
    </section >
  );
}
