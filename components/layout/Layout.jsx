import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-gradient-to-r from-slate-800 to-black pb-10'>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
