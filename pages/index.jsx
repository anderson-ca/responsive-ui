import appStyles from '../styles/app.module.css';
import Navbar from '../components/Navbar';
import Header from '../containers/Header';

const App = () => {
  return (
        <div className={appStyles.App}>
            <main className={appStyles.gradient__bg}>
                <Navbar />
                <Header />
            </main>
        </div>
    );
};

export default App;
