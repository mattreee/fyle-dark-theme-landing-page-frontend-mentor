import Header from './component/Header';
import Nav from './component/Nav';
import Hero from './component/Hero';

import BodyContent from './component/BodyContent';
import Features from './component/Features';
import More from './component/More';
import Testimonies from './component/Testimonies';
import Subscribe from './component/Subscribe';

import Footer from './component/Footer';
import FooterFooter from './component/FooterFooter';

function App() {
  return (
    <div>
      <Header>
        <Nav />
        <Hero />
      </Header>

      <BodyContent>
        <Features />
        <More />
        <Testimonies />
        <Subscribe />
      </BodyContent>

      <Footer />
      <FooterFooter />
    </div>
  );
}

export default App;
