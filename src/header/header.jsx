import './header.scss';


const Header = () => {
  return (
    <header>
      <div className='container-header'>
        <div className='logo-header'>
          <h1>Brilliard Aurélien</h1>
        </div>
        <nav>
          <ul className="navigation">
            <a href="/" className="home">Accueil</a>
            <a href="#projects" className="projects"> Projets</a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
