import { Button } from "@/components/ui/button";
import Link from 'next/link'
import Image from "next/image"
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";




export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })
  // console.log(events)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Create: Your Events,In Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Ssteam is an experienced Ticket Management System that help creators monetize their content</p>
            <Button size="lg" asChild className="w-full md:w-fit lg:w-fit bg-black justify-center text-center items-center text-white hover:bg-yellow-400 rounded-full p-2">

              <Link href="#events">
                <h2 className="text-center h3-bold p-2">Explore and Buy !!!</h2>
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/home.png"
            alt="home"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="my-8 flex flex-col md:gap-12 gap-8 wrapper">
        <h2 className="h2-bold">Sstream Events that are open !!! ...</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search /> 
          <CategoryFilter />
        </div>
        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>


    </>
  )
}
