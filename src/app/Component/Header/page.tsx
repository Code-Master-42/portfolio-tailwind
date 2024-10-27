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
        <header className="flex justify-between py-4 px-4 text-white bg-slate-500 max-w-screen-2xl mx-auto ">
            <div>
                <h2 className=" font-bold text-2xl text-black uppercase">Portfolio</h2></div>
                <ul >
                    <li className="space-x-4 hidden md:block gap-8 mx-8 text-black  text-2xl"><Link href={"/"}>Home</Link>
                    <Link href={"Component/About"}>About</Link>
                    <Link href={"/Contact"}>Contact</Link></li></ul>
            
  <Sheet>
  <SheetTrigger className="md:hidden"><CiMenuBurger className="w-8 h-6 text-black"/></SheetTrigger>
  <SheetContent className="bg-pink-400 ">
    <ul>
                    <li className="mt-8 flex flex-col items-center justify-center gap-10 font-bold"><Link href={"/"}>Home</Link>
                    <Link href={"Component/About"}>About</Link>
                    <Link href={"/"}>Contact</Link></li></ul>
     
  </SheetContent>
</Sheet>
</header>)}
export default Kaka