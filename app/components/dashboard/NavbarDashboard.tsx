import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const NavbarDashboard = () => {
  return (
    <div>

        <div className="flex flex-row items-center">
              <Image src={"/logo.jpg"} alt="Logo Web" width={100} height={100} />
              <div className="pl-5">
                <div className="font-extrabold text-2xl">Arsip</div>
                <div className="text-slate-400">Perpustakaan Digital</div>
              </div>
        </div>

      <UserButton />
    </div>
  )
}

export default NavbarDashboard