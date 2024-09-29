'use client';
import { motion } from 'framer-motion';
export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.form initial={{ top: 50, opacity: 0 }} animate={{ top: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.3 }}>
			{children}
		</motion.form>
	);
}
