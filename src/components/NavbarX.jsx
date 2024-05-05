import sportsee_logo from '../assets/sportsee_logo.png';
const NavbarX = () => {
  return <div className="bg-[#020203] text-white shadow-md p-4 flex items-center justify-between">
    <img src={sportsee_logo} alt="logo" className='max-w-[180px]' />
    <a href="/" className='text-2xl'>Accueil</a>
    <a href="/" className='text-2xl'>Profil</a>
    <a href="/" className='text-2xl'>Réglage</a>
    <a href="/" className='text-2xl'>Communauté</a>
  </div>;
}

export default NavbarX