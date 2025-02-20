export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Flaver Protection. All rights reserved.</p>
      </div>
      <a
        href="/gestisci-prodotti"
        className="absolute bottom-4 right-0 transform -translate-x-1/2 cursor-pointer italic text-sm"
      >
        gestisci prodotti
      </a>
    </footer>
  );
}
