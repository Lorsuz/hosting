// Exemplo de NavLink.jsx
import Link from 'next/link';
const CustomNavLink = ({ href, children }: { href: any; children: any }) => {
	return <Link href={href}>{children}</Link>;
};

export default CustomNavLink;
