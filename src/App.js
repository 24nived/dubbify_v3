import logo from './logo.svg';
import './App.css';
import { Footer, Blog, Possibility, Features, About, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App=() =>{
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>     
    </div>
  )
}

export default App;
