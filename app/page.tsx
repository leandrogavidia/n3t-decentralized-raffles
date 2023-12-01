import Image from "next/image";
import { N3tButton } from "@/components/buttons/n3t-button";
import Link from "next/link";

export default function Home() {
  return (
    <>    
      <section className="grid grid-cols-1 mt-20 text-center">
        <h1 className="text-9xl font-bold">N<span className="bg-n3t-gradient text-transparent bg-clip-text">3</span>T</h1>
        <h2 className="text-2xl font-medium mb-11">Decentralized raffles</h2>
        <Image 
          src={"/images/chest-illustration.png"}
          width={474}
          height={497}
          alt="Chest illustration"
          title="Chest illustration"
          about="Chest illustration"
          className="w-44 h-44 mx-auto"
        />
        <h3 className="text-lg font-light mt-8 mb-7">Decentralized raffles, a new way for chance to be completely safe, transparent and uncontrollable.</h3>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Link href="#" className="w-full">
            <N3tButton 
              color="black" 
              width="full"
              className="[&_p]:text-white [&_p]:font-semibold [&:hover_p]:text-n3t-gray"
            >
              <p>How do I participate?</p>
            </N3tButton>
          </Link>
          <Link href="#" className="w-full">          
            <N3tButton 
              color="black" 
              width="full"
              className="[&_p]:text-white [&_p]:font-semibold [&:hover_p]:text-n3t-gray [&:hover_p_span]:text-white"
            >
              <p>The N<span className="bg-n3t-gradient text-transparent bg-clip-text">3</span>T’s dream</p>
            </N3tButton>
          </Link>
        </div>
      </section>
    </>
  )
}
