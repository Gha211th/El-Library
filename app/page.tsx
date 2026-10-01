import Card from "./components/Card/Card";
import MainContent from "./components/MainContent";
import NavbarComponent from "./components/NavbarComponent";

export default function Home() {
  return (
    <>
    <NavbarComponent />

    <div className="mx-[10%] pt-14">
    <MainContent />
    </div>

    <div className="pt-10 flex flex-row gap-4 justify-center pb-30">
      <Card number={1} title={"Catata Peminjaman"} description={"Tambah peminjaman baru lengkap dengan kartu anggota dan tanggal jatuh tempo."} />
      <Card number={2} title={"Pantau Keterlambatan"} description={"Tambah peminjaman baru lengkap dengan kartu anggota dan tanggal jatuh tempo."} />
      <Card number={3} title={"Kelola Katalog"} description={"Tambah peminjaman baru lengkap dengan kartu anggota dan tanggal jatuh tempo."} />
    </div>

    <div className="flex flex-row items-center border border-slate-100 w-5xl"></div>
    <div className="text-slate-500 flex flex-row gap-15 pt-10 pl-20">
      <div>
        1.284 koleksi
      </div>
      <div>
        474 anggota aktif
      </div>
      <div>
        17 perlu tindak lanjut
      </div>
    </div>
    </>
  );
}
