import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-fit mx-auto min-h-screen items-center justify-center gap-y-3">
      <h1 className="font-semibold text-2xl">Ancora nulla qui</h1>
      <Button asChild><Link href='/memos'>Vai a /memos</Link></Button>
    </div>
  );
}
