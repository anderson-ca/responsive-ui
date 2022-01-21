import appStyles from '../styles/app.module.css';
import Navbar from '../components/Navbar';

const App = () => {
  return (
        <div className={appStyles.App}>
            <main className={appStyles.gradient__bg}>
                <Navbar />
            </main>
        </div>
    );
};

export default App;
