import Link from "next/link";

const PoweredByCalendso = () => (
  <div className="text-xs text-center sm:text-right p-1">
    <Link href={`https://heralds.io`}>
      <a target="_blank" className="dark:text-white text-gray-500 opacity-50 hover:opacity-100">
        powered by{" "}
        <img
          style={{ top: -2 }}
          className="dark:hidden w-auto inline h-5 relative"
          src="/heralds-logo-word.svg"
          alt="Heralds Logo"
        />
        <img
          style={{ top: -2 }}
          className="hidden dark:inline w-auto h-5 relative"
          src="/heralds-logo-word.svg"
          alt="Heralds Logo"
        />
      </a>
    </Link>
  </div>
);

export default PoweredByCalendso;
