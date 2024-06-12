import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Container from './Container/Container';
import Contain from './SecContain/Contain';
import Avatar from './AvatarContainer/Avatar';
import ScrollContainer from './ScrollContainer/ScrollContainer'
import Products from './Products/Products';
import Tokenomics from './Tokenomics/Tokenomics';
import Roadmap from './Roadmap/RoadMap';
import GetStarted from './GetStarted/GetStarted';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Container/>
    <Contain/>
    <Avatar/>
    <ScrollContainer/>
    <Products/>
    <Tokenomics/>
    <Roadmap/>
  <GetStarted/>
  <Footer/>
    </div>
  );
}

export default App;
