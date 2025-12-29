import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface AppHeaderLinkProps {
    href: string;
    children: ReactNode;
}
export default function AppHeaderLink({ href, children }: AppHeaderLinkProps) {
    return <Link href={href} className="text-gray-600 font-medium">{children}</Link>;
}
