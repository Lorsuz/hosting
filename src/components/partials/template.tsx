'use client'
import { motion } from 'framer-motion';
export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div initial={{ top: 16, opacity: 0 }} animate={{ top: 0, opacity: 1 }} transition={{ ease: 'ease-in-out', duration: '1' }}>
			{children}
		</motion.div>
	);
}
