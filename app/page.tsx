import Selection from "@/components/Selection";
import { SelectionForm } from "@/components/SelectionForm";
import Title from "@/components/Title";
import { Form } from "@/components/ui/form";


export default function Home() {
  return (
    <div className="min-h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex" suppressHydrationWarning={true}>
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-full w-full flex flex-col px-20 gap-28 pb-20">
        <Title />
        <SelectionForm />
      </div>
    </div>
  );
}
