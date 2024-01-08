
// import NavItems from "./NavItems"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"

const MobileNav = () => {
    return (
        <div className="flex flex-col gap-6 md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {/* <button type="button" className="flex items-center justify-center rounded-md
                    text-base font-medium leading-6 text-white hover:
                    bg-black focus:outline-none transition duration-150
                    ease-in-out">Hayyy</button> */}
                    <Image
                        src="/assets/icons/menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="px-8 bg-slate-700 text-white border-4">
                    <DropdownMenuLabel className="text-lg mb-2">My Menu</DropdownMenuLabel>
                    <Separator />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="my-2">
                        <NavItems />
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MobileNav