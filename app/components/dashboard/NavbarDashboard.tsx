import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const NavbarDashboard = () => {
  return (
    <div className="w-full flex flex-row justify-around pt-10">

        <div className="flex flex-row items-center">
              <Image src={"/logo.jpg"} alt="Logo Web" width={70} height={70} className="rounded-full"/>
              <div className="pl-5">
                <div className="font-extrabold text-2xl">Arsip</div>
                <div className="text-slate-400">Perpustakaan Digital</div>
              </div>
        </div>

      <UserButton/>
    </div>
  )
}

export default NavbarDashboard