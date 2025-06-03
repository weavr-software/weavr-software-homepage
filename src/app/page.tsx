import HeroSection from "../../components/home/hero-section/HeroSection";
import AboutSection from "../../components/home/about/AboutSection";
import ResumeSection from "../../components/home/resume/ResumeSection";
import styles from "../../components/home/hero-section/HeroSection.module.css";
import ServicesSection from "../../components/home/services/ServicesSection";
export default function Home() {

  return (<div >
    <div className={styles.backgroundWrapper}>
      <div className={styles.gradientBackground}>
      </div>
    </div>
    <HeroSection />
    <AboutSection />
    <ResumeSection />
    <ServicesSection/>
  </div>)
}