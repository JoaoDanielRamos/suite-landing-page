import styles from './styles/styles.module.scss';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <Navigation />
        <Hero />

        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
