import { ChangeEvent, useState } from "react";
import diLua1 from "./assets/di-lua-1.jpg";
import diLua2 from "./assets/di-lua-2.jpg";
import diLua3 from "./assets/di-lua-3.jpg";
import diLua4 from "./assets/di-lua-4.jpg";

type Page = "card" | "memories";

type Memory = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  position?: string;
};

const initialMemories: Memory[] = [
  {
    src: diLua1,
    alt: "Dì Lụa duyên dáng trong tà áo dài trắng tại Quảng trường Ba Đình",
    caption:
      "Chúc dì luôn rạng rỡ, thanh lịch và ngập tràn niềm vui trong từng khoảnh khắc cuộc sống.",
    position: "center 22%",
  },
  {
    src: diLua2,
    alt: "Dì Lụa dịu dàng cùng chiếc quạt cờ đỏ sao vàng",
    caption:
      "Mong mỗi ngày của dì đều ngập tràn niềm vui, dịu dàng và ngọt ngào như chính nụ cười của dì.",
    position: "center 20%",
  },
  {
    src: diLua3,
    alt: "Dì Lụa rạng rỡ bên bó hoa tươi ngày khai giảng năm học mới",
    caption:
      "Chúc dì luôn dồi dào sức khỏe, tràn đầy nhiệt huyết và thật nhiều hạnh phúc với sự nghiệp trồng người.",
    position: "center 25%",
  },
  {
    src: diLua4,
    alt: "Dì Lụa tươi vui giữa vườn cúc trắng rực rỡ",
    caption:
      "Tuổi mới chúc dì luôn tràn đầy năng lượng tích cực, yêu đời và có thêm thật nhiều chuyến đi đáng nhớ.",
    position: "center 30%",
  },
];

function FloralSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 180 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 195C63 164 67 111 88 72C107 36 136 22 163 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M66 132C43 129 29 116 22 95C44 94 61 107 66 132ZM86 77C62 75 47 61 41 40C64 40 81 54 86 77ZM100 52C101 29 114 14 134 7C135 29 122 46 100 52ZM57 151C78 147 94 156 105 174C85 181 65 172 57 151Z"
        fill="currentColor"
        fillOpacity=".14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="164" cy="14" r="7" fill="currentColor" fillOpacity=".3" />
      <circle cx="154" cy="18" r="5" fill="currentColor" fillOpacity=".5" />
    </svg>
  );
}

function Navigation({
  page,
  onNavigate,
}: {
  page: Page;
  onNavigate: (page: Page) => void;
}) {
  return (
    <nav
      className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 rounded-full border border-white/80 bg-[#fffaf7]/90 p-1.5 shadow-[0_8px_30px_rgba(111,65,65,0.12)] backdrop-blur-md"
      aria-label="Điều hướng chính"
    >
      <button
        type="button"
        onClick={() => onNavigate("card")}
        className={`nav-pill ${page === "card" ? "nav-pill-active" : ""}`}
      >
        Thiệp chúc mừng
      </button>
      <button
        type="button"
        onClick={() => onNavigate("memories")}
        className={`nav-pill ${page === "memories" ? "nav-pill-active" : ""}`}
      >
        Kỷ niệm đẹp
      </button>
    </nav>
  );
}

function BirthdayCard() {
  const [hugSent, setHugSent] = useState(false);

  return (
    <section className="birthday-card relative z-10 w-full max-w-3xl overflow-hidden rounded-[2.25rem] border border-white/70 bg-[#fffaf7]/90 px-6 py-12 text-center shadow-[0_30px_80px_rgba(111,65,65,0.16)] backdrop-blur-sm sm:px-14 sm:py-16">
      <div className="mx-auto mb-7 flex w-fit items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#a95f68]">
        <span className="h-px w-8 bg-[#d8a8a3]" />
        Dành tặng dì Lụa
        <span className="h-px w-8 bg-[#d8a8a3]" />
      </div>

      <div className="cake mx-auto mb-8" aria-hidden="true">
        <span className="flame" />
        <span className="candle" />
        <span className="frosting" />
        <span className="cake-body" />
        <span className="cake-plate" />
      </div>

      <p className="mb-2 font-serif text-xl italic text-[#8a5a5d] sm:text-2xl">
        Chúc mừng sinh nhật
      </p>
      <h1 className="font-serif text-5xl leading-none font-semibold text-[#753f47] sm:text-7xl">
        Dì Lụa
      </h1>
      <div className="mx-auto my-8 h-px w-16 bg-[#d7b3aa]" />
      <p className="mx-auto max-w-xl text-base leading-8 text-[#6d5552] sm:text-lg sm:leading-9">
        Chúc dì tuổi mới luôn thật nhiều sức khỏe, mỗi ngày đều ngập tràn niềm
        vui và bình an. Mong những điều dịu dàng, may mắn nhất sẽ luôn ở bên dì.
      </p>
      <p className="mt-7 font-serif text-xl italic text-[#8a5a5d]">
        Thương mến, Linh
      </p>

      <button
        type="button"
        onClick={() => setHugSent(true)}
        className="mt-9 min-w-44 rounded-full bg-[#8e4b55] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(117,63,71,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#753f47] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8e4b55]"
      >
        {hugSent ? "Cái ôm đã được gửi" : "Gửi dì một cái ôm"}
      </button>
      <p
        className={`mt-4 text-sm text-[#9a6e70] transition-all duration-500 ${
          hugSent ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        aria-live="polite"
      >
        Một cái ôm thật ấm áp từ Linh đến dì.
      </p>
    </section>
  );
}

function MemoriesPage() {
  const [memories, setMemories] = useState(initialMemories);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMemory = memories[activeIndex];

  function move(direction: number) {
    setActiveIndex(
      (current) => (current + direction + memories.length) % memories.length,
    );
  }

  function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    const personalMemories = files.map((file, index) => ({
      src: URL.createObjectURL(file),
      alt: `Ảnh kỷ niệm của dì Lụa ${index + 1}`,
      caption:
        "Một khoảnh khắc thật đẹp của dì Lụa — mong nụ cười này sẽ luôn rạng rỡ.",
    }));

    setMemories((current) => [...personalMemories, ...current]);
    setActiveIndex(0);
    event.target.value = "";
  }

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl pt-16">
      <header className="mb-8 text-center sm:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#a95f68]">
          Album dành riêng cho dì
        </p>
        <h1 className="font-serif text-4xl font-semibold text-[#753f47] sm:text-6xl">
          Những khoảnh khắc đẹp
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#705654]">
          Mỗi bức ảnh là một kỷ niệm, mỗi lời chúc là một chút yêu thương Linh
          muốn gửi đến dì Lụa trong ngày đặc biệt.
        </p>
      </header>

      <div className="gallery-shell grid gap-5 rounded-[2rem] border border-white/80 bg-[#fffaf7]/85 p-3 shadow-[0_30px_80px_rgba(111,65,65,0.14)] backdrop-blur-sm sm:p-5 lg:grid-cols-[1.55fr_0.8fr]">
        <div className="relative min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-[#eadbd3] sm:min-h-[36rem]">
          <img
            key={activeMemory.src}
            src={activeMemory.src}
            alt={activeMemory.alt}
            style={{ objectPosition: activeMemory.position || "center 25%" }}
            className="gallery-image absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3e2828]/80 via-[#3e2828]/30 to-transparent px-5 pt-28 pb-5 text-white sm:px-7 sm:pb-7">
            <p className="max-w-2xl font-serif text-xl leading-relaxed sm:text-2xl">
              “{activeMemory.caption}”
            </p>
            {activeMemory.credit && (
              <p className="mt-3 text-[0.68rem] tracking-wide text-white/65">
                {activeMemory.credit}
              </p>
            )}
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="gallery-control"
              aria-label="Xem ảnh trước"
            >
              Trước
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="gallery-control"
              aria-label="Xem ảnh tiếp theo"
            >
              Tiếp
            </button>
          </div>
        </div>

        <aside className="flex flex-col p-2 sm:p-3">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-serif text-2xl text-[#753f47]">Album của dì</p>
              <p className="mt-1 text-sm text-[#927371]">
                {activeIndex + 1} / {memories.length} khoảnh khắc
              </p>
            </div>
            <label className="cursor-pointer rounded-full border border-[#d8b9b3] px-4 py-2 text-xs font-semibold text-[#8e4b55] transition hover:bg-[#f6e7e3] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#8e4b55]">
              Thêm ảnh của dì
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={addPhotos}
                className="sr-only"
              />
            </label>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3">
            {memories.slice(0, 6).map((memory, index) => (
              <button
                key={`${memory.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative min-h-32 overflow-hidden rounded-2xl border-2 transition-all ${
                  activeIndex === index
                    ? "border-[#a95f68] shadow-[0_8px_20px_rgba(117,63,71,0.18)]"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
                aria-label={`Xem ảnh ${index + 1}`}
              >
                <img
                  src={memory.src}
                  alt=""
                  style={{ objectPosition: memory.position || "center 25%" }}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-2 bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#fffaf7]/90 text-[0.65rem] font-semibold text-[#753f47]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-5 rounded-2xl bg-[#f6ece7] px-4 py-3 text-xs leading-5 text-[#866663]">
            Ảnh bạn chọn chỉ được dùng để trình chiếu trên thiết bị này và sẽ
            không được tải lên máy chủ.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("card");

  return (
    <main
      translate="no"
      className="notranslate relative min-h-screen overflow-hidden bg-[#f8eee8] px-5 py-10 text-[#4f3434]"
    >
      <Navigation page={page} onNavigate={setPage} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <FloralSprig className="fixed -bottom-8 -left-8 w-40 -rotate-6 text-[#a95f68] sm:left-5 sm:w-56" />
      <FloralSprig className="fixed -right-10 -top-8 w-40 rotate-[190deg] text-[#7f9a7a] sm:right-4 sm:w-56" />
      <span className="sparkle left-[12%] top-[18%]" />
      <span className="sparkle right-[16%] top-[22%]" />

      <div
        className={
          page === "card"
            ? "flex min-h-[calc(100vh-5rem)] items-center justify-center pt-12"
            : ""
        }
      >
        {page === "card" ? <BirthdayCard /> : <MemoriesPage />}
      </div>
    </main>
  );
}
