export default function HomePage() {
  const mockurl = [
    "https://utfs.io/f/562c8eca-1526-4777-bc2b-d13e6413e395-cflf5p.jpg",
    "https://utfs.io/f/9d44e3d8-bf69-4489-af14-798a96a7dea8-tpk6wk.com_wallpaper.jpg",
    "https://utfs.io/f/43724651-ef2e-492d-a803-b3a3894e88eb-tsciqj.jpeg",
    "https://utfs.io/f/e9fefe3e-ef56-455e-88b3-478bd805de71-1jb8hz.png",
  ];

  const mockImage = mockurl.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage, ...mockImage].map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={`Image ${image.id}`} className="w-48" />
          </div>
        ))}
      </div>
    </main>
  );
}
