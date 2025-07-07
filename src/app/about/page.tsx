import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]"
      >
        About Us
      </motion.h1>

      <motion.section 
        className="max-w-2xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-lg bg-black/[.05] dark:bg-white/[.06]"
        >
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="leading-relaxed">
            To create innovative solutions that empower users through intuitive design
            and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-lg bg-black/[.05] dark:bg-white/[.06]"
        >
          <h2 className="text-2xl font-semibold mb-3">The Team</h2>
          <ul className="space-y-4">
            {['Design', 'Engineering', 'Product'].map((team, i) => (
              <motion.li
                key={team}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 bg-current rounded-full" />
                {team} Team
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}