export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-green-800 text-white ">
      {/* navbar logo */}
      <a className="navbar-logo flex items-center justify-center" href="/">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small_2x/abstract-circle-logo-icon-free-png.png"
          alt=""
          className="w-20 "
        />
        <h1 className="text-2xl font-bold">Flaver Protection</h1>
      </a>

      {/* navbar links */}
      <ul className="flex items-center justify-center">
        <li className="mx-4">
          <a href="/">Home</a>
        </li>
        <li className="mx-4">
          <a href="/contatti">Contatti</a>
        </li>
      </ul>
    </nav>
  );
}
