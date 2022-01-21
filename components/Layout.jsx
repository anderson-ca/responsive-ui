import layoutStyles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
        <div className={layoutStyles.container}>
            <main className={layoutStyles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
