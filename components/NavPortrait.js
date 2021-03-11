import { motion } from 'framer-motion'
import styles from '../styles/NavPortrait.module.css'
import { aboutVariants, communityVariants } from '../animations/navPortraitAnimation'

const NavPortrait = () => {
  return (
    <nav className={styles.nav}>
      <motion.div 
      // WHITE ABOUT
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
      className={styles.whiteAbout}>about</motion.div>
      <motion.div
      // WHITE COMMUNITY
        variants={communityVariants}
        initial="hidden"
        animate="visible"
      className={styles.whiteCommunity}>community</motion.div>
    </nav>
  )
}

export default NavPortrait
