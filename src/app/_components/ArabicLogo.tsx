export default function ArabicLogo() {
  return (
    <div className="lg:max-w-[500px] mx-auto w-full overflow-hidden bg-black flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <div
          className="text-8xl md:text-9xl lg:text-[12rem] text-[#1f1f1d]"
          style={{
            fontFamily:
              "'Amiri', 'Scheherazade New', 'Arabic Typesetting', serif",
            fontWeight: "400",
            transform: "rotate(-3deg)",
            letterSpacing: "-0.05em",
            fontStyle: "italic",
            textShadow: "0 0 20px rgba(107, 114, 128, 0.3)",
          }}
        >
          علي
        </div>
      </div>

      <div className="text-white text-sm font-light tracking-wider mt-28">
        Nass.sa
      </div>
    </div>
  );
}
