import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 border-b border-white/10">
            <Link href="/" className="text-xl font-bold text-white">
                Weavr
            </Link>
        </header>
    );
}