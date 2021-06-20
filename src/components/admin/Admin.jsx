// import  from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

function Admin() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default Admin;
