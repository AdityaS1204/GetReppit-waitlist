import Logo from "@/Components/Logo";
import Waitlist from "@/Components/Waitlist";
export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Logo />
      </header>
      <Waitlist />
    </main>
  );
}
