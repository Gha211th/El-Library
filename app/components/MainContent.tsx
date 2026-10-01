import { TypingAnimation } from "@/components/ui/typing-animation"
import Link from "next/link"



const MainContent = () => {
  return (
    <div className="max-w-xl h-82 flex flex-col">
      <div className="text-slate-400">SISTEM PEMINJAMAN BUKU</div>
        <TypingAnimation loop pauseDelay={2000} className="text-5xl font-extrabold">Data peminjaman perpustakaan, rapi dalam satu layar</TypingAnimation>
        <div>
        <Link href={"/pages/login"}>
        <div className="text-slate-400 py-4">Catat siapa meminjam buku apa, kapan harus kembali, dan mana yang terlambat -  </div>
        <div className="py-2 px-4 w-34 rounded-4xl bg-black text-white">
          Mulai Sekarang
          </div>
        </Link>
        </div>
    </div>
  )
}

export default MainContent
