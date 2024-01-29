'use client'

import { usePathname, useRouter } from 'next/navigation'
import styled from "styled-components";

const StyledLink = styled.a<{ href: string, $path: string }>`
      color: ${({ href, $path }) => (href === $path ? "red" : "black")};
`

function NavLink({ children, href }: Readonly<{ children: React.ReactNode, href: string }>) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <StyledLink onClick={handleClick} href={href} $path={pathname}>
            {children}
        </StyledLink>
    );
}

export default function Links() {
    const pathname = usePathname()
    return (
        <nav>
            <ul>
                <li>
                    <NavLink href='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink href='/dashboard/a'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink href='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}