import { Button } from "@/components/ui/button";
import Link from 'next/link'
import Image from "next/image"




export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Create: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="w-full sm:w-fit bg-black justify-center text-center items-center text-white hover:bg-yellow-400 rounded-lg py-2 px-4">

              <Link href="#events">
                <h2 className="text-center">Explore and Buy !!!</h2>
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="my-8 flex flex-col md:gap-12 gap-8 wrapper">
        <h2 className="h2-bold">Events You Can Participate In ..</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search 
          Category Filter
        </div>
      </section>


    </>
  )
}
