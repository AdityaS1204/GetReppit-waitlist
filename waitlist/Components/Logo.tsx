import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center justify-start py-8 px-8 group">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight font-[family-name:var(--font-roboto-slab)] transition-all group-hover:scale-105 cursor-pointer">
                <span className="text-inherit">Get</span>
                <span className="text-[#FF4500]">Reppit</span>
            </h1>
        </Link>
    );
};

export default Logo;

