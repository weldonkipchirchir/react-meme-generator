 import logo from '../assets/logo.png';
 export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="troll-face" className='header-image' />
            <h4 className='header-project'> React Course Project 3</h4>
        </header>
    )
 }