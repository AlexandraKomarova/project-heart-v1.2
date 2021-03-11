import { motion } from 'framer-motion'
import styles from '../styles/NavLandscape.module.css'
import { whiteAboutVariants, redAboutVariants, whiteCommunityVariants, redCommunityVariants } from '../animations/navLandscapeAnimations'

const NavLandscape = () => {
  return (
    <nav className={styles.nav}>
      <motion.div 
      // WHITE ABOUT
        variants={whiteAboutVariants}
        initial="hidden"
        animate="visible"
      className={styles.whiteAbout}>about</motion.div>
      <motion.div
      // WHITE COMMUNITY
        variants={whiteCommunityVariants}
        initial="hidden"
        animate="visible"
      className={styles.whiteCommunity}>community</motion.div>
      <motion.div 
      // RED ABOUT
        variants={redAboutVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      className={styles.redAbout}>about</motion.div>
      <motion.div 
      // RED COMMUNITY
        variants={redCommunityVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      className={styles.redCommunity}>community</motion.div>
    </nav>
  )
}

export default NavLandscape
