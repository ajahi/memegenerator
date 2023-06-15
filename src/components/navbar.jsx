import logo from '../assets/magne.png'
function Navbar() {
    return ( <nav >
        <div className="leftComp">
            <img className='nav--logo' src={logo} alt="" />
            <h2>Halka Ramailo</h2>
        </div>
        <div className="rightComp">
            <p>Meme generator react challenge scrimba</p>
        </div>
        
    </nav> );
}

export default Navbar;