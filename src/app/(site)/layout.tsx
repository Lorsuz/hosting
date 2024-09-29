'use client';
import Header from '@partial/Header';
import Footer from '@partial/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header></Header>
			{children}
			<Footer></Footer>
		</>
	);
}
