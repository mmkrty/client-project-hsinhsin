const NavBar = () => {
  return (
    <nav class="flex justify-around items-center bg-white shadow-md py-2 px-2 position: fixed w-screen z-10 hover:py-4 transition-all">
      <div class="w-36">
        <a href="#about">
          {/* <img src="" alt="logo" class="w-full" /> */}
          logo
        </a>
      </div>
      <ul class="flex justify-between items-center">
        <li>
          <a class="p-2" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="p-2" href="#contact">
            Features
          </a>
        </li>
        <li>
          <a class="p-2" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
