import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Container from './Container/Container';
import Contain from './SecContain/Contain';
import Avatar from './AvatarContainer/Avatar';
import ScrollContainer from './ScrollContainer/ScrollContainer'
import Products from './Products/Products';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Container/>
    <Contain/>
    <Avatar/>
    <ScrollContainer/>
    <Products/>
    </div>
  );
}

export default App;
