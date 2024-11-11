import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,

} from "@/components/ui/sheet"
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
const Kaka=()=>{
    return(
        <header className="flex justify-between   max-w-screen-2xl mx-auto ">
            <div className="bg-white  flex items-center justify-between w-full h-16">
                <h2 className=" font-bold text-2xl text-black uppercase mx-4">R.A</h2>
                <ul >
                    <li className="space-x-8 hidden md:block gap-8  text-black  text-2xl mx-20 shadow-md font-bold"><Link href={"/"}>Home</Link>
                    <Link href={"/About"}>About</Link>
                    <Link href={"/Contact"}>Contact</Link></li></ul></div>
            
  <Sheet>
  <SheetTrigger className="md:hidden"><CiMenuBurger className="w-8 h-6 text-black mx-4"/></SheetTrigger>
  <SheetContent className="bg-pink-400 ">
    <ul>
                    <li className="mt-8 flex flex-col items-center justify-center gap-10 font-bold"><Link href={"/"}>Home</Link>
                    <Link href={"/About"}>About</Link>
                    <Link href={"/Contact"}>Contact</Link></li></ul>
     
  </SheetContent>
</Sheet>
</header>)}
export default Kaka