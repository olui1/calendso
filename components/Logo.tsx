export default function Logo({ small }: { small?: boolean }) {
  return (
    <h1 className="brand-logo inline">
      <strong>
        <img
          className={small ? "h-4 w-auto" : "h-5 w-auto"}
          alt="Heralds"
          title="Heralds"
          src="/heralds-logo-header.svg"
        />
      </strong>
    </h1>
  );
}
