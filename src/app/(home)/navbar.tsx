
"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
    weight: ["700"],   
});
interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
        <Button
        asChild
        variant="outline"
        className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
            isActive && "bg-black text-white hover:bg-black hover:text-white",
        )}>
        <Link href={href}>
        {children}
        </Link>
           
        </Button>
    ); 
};

const NavbarItems = [
{href:"/",children:"Home"}, 
{href:"/about",children:"About"},
{href:"/contact",children:"Contact"},
{href:"feature",children:"Feature"},
{href:"/pricing",children:"Pricing"},
];

export const Navbar = () => {
    const pathname=usePathname();
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
        <Link href="/" className="pl-6 flex items-center">
           <span className={cn("text-4xl font-semibold", poppins.className)}>MyApp</span>
        </Link>

        <div className="items-center gap-4 hidden lg:flex">
            {NavbarItems.map((item) => (
                <NavbarItem
                    key={item.href}
                        href={item.href}
                        >
                            {item.children}
                        </NavbarItem>
                    ))}
        </div>
    </nav>
  );
}