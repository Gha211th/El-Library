interface CardProps {
    number: number,
    title: string,
    description: string
}

const Card = ({number, title, description} : CardProps) => {
  return (
    <div className="w-md border-2 border-gray-200 rounded-3xl shadow-2xl">
      <div className="p-5">
        <div className="text-blue-600">{number}</div>
        <div className="font-extrabold text-xl py-2">{title}</div>
        <div className="text-slate-400">{description}</div>
      </div>
    </div>
  )
}

export default Card
// Tambah peminjaman baru lengkap dengan kartu anggota dan tanggal jatuh tempo.