import Image from "next/image"
import Link from "next/link"    

const NavbarComponent = () => {
  return (
    <div className="flex flex-row justify-between items-center p-10">

      <div className="flex flex-row items-center">
      <Image src={"/logo.jpg"} alt="Logo Web" width={100} height={100} />
      <div className="pl-5">
        <div className="font-extrabold text-2xl">Arsip</div>
        <div className="text-slate-400">Perpustakaan Digital</div>
      </div>
    </div>

    <div className="border border-black h-full py-2 px-8 rounded-4xl">
        <Link href={"/pages/login"}>Masuk</Link>
    </div>
    </div>
    
  )
}

export default NavbarComponent
