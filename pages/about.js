import Link from "next/link";
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'

export const testVariants = {
  hidden: {
    x: 1000
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 9.2,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

const about = () => {
  return (
    <motion.div className={styles.container} variants={testVariants} initial="hidden"
        animate="visible">
      <div className={styles.container}>about</div>
      <Link href='/'><div className={styles.container}>home</div></Link>
    </motion.div>
  )
}

export default about
