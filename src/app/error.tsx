'use client';

import { useEffect } from 'react';
import Header from '@partial/Header';
import Footer from '@partial/Footer';
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<>
			<Header></Header>
			<main>
				<h2>Something went wrong!</h2>
				<button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</button>
			</main>
			<Footer></Footer>
		</>
	);
}

