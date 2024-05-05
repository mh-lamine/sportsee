import './App.css'
import Header from './components/Header'
import NavbarX from './components/NavbarX'
import NavbarY from './components/NavbarY'

function App() {

  return (
    <div className="bg-[#E5E5E5] h-screen">
      <NavbarX />
      <div className='flex h-full'>
        <NavbarY />
        <div>
          <Header />
          <div>content</div>
        </div>
      </div>
    </div>
  );
}

export default App
