import Logo from "@/Components/Logo";
import Waitlist from "@/Components/Waitlist";

export default function WaitlistPage() {
    return (
        <main className="min-h-screen text-[#1A1A1A]">
            <header className="fixed top-0 left-0 w-full z-50">
                <Logo />
            </header>
            <Waitlist />
        </main>
    );
}
