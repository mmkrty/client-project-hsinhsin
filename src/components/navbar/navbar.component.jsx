const NavBar = () => {
  return (
    <nav class="flex justify-around items-center bg-white shadow-md p-2 position: fixed w-screen">
      <div class="w-36">
        <a href="#about">
          <img src="" alt="logo" class="w-full" />
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
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
