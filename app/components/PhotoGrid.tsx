export default function PhotoGrid() {
  const photos = ["/cum1.jpg", "/cum2.jpg","/cum3.jpg"];
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Momentos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Foto ${i+1}`} className="rounded-xl object-cover w-full h-80 sm:h-100" />
        ))}
      </div>
    </div>
  );
}
