import { RiArrowLeftLongLine } from "react-icons/ri";

export default function Navbar({
  containerClass,
  bodyClass,
  mainClass,
  children,
  menuClass,
  hidden,
}) {
  return (
    <>
      <nav
        className={
          containerClass ||
          "w-full h-14 md:h-17 fixed top-0 left-0 bg-neutral-900 flex items-center justify-between px-10"
        }
      >
        {children}
      </nav>
    </>
  );
}
