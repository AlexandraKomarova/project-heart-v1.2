import Link from "next/link";
import { motion } from 'framer-motion'
import styles from '../styles/NavPortrait.module.css'
import { aboutVariants, communityVariants } from '../animations/navPortraitAnimation'

const NavPortrait = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/about2'>
        <motion.div
          // WHITE ABOUT
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className={styles.whiteAbout}>contact project heart
        </motion.div>
      </Link>
      
    </nav>
  )
}

export default NavPortrait

// <motion.div
//       // WHITE COMMUNITY
//         variants={communityVariants}
//         initial="hidden"
//         animate="visible"
//       className={styles.whiteCommunity}>community</motion.div>
