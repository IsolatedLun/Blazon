import { Link } from "react-router-dom";
import { BAR_ICON, TIMES_ICON } from "../../consts";

const toggleSidenav = () => {
  const sideNavbar = document.getElementById('side-navbar')!;

  if(sideNavbar.getAttribute('data-state') === 'on')
    sideNavbar.setAttribute('data-state', 'off')
  else
    sideNavbar.setAttribute('data-state', 'on')
}

const PrimaryNav = () => {
  return (
    <>
      <nav aria-label="Primary navigation" role='Primary navigation' className='[ primary-navbar ] [ flex-between ]'>
          <a className="[ primary-navbar__skip ] [ button ]" href="#main-content">Skip navigation</a>
          <h1 className="[ nav__title ] [ header-700 clr-primary-400 ]">Blazon</h1>
         
          <ul className='[ nav__links ] [ link-list flex-horizontal-items ]' role='list' data-device='desktop'>
            <li><Link to="/" className='[ br-100 ]'>Home</Link></li>
            <li><a href="/#influencers" className='[ br-100 ]'>Influencers</a></li>
          </ul>

          <Link className='[ nav__button ] [ button ]' to='/request' data-device='desktop'>Start</Link>
          <button aria-label='Open side navbar button' onClick={() => toggleSidenav()}
            className="[ fa button ]" data-variant='ghost' data-device='mobile'>{ BAR_ICON }</button>
      </nav>

      <nav className="[ side-navbar ] [ flex-flow flex-col text-center ]" aria-label="Side navigation" 
        role='Side navigation' data-state='off' id='side-navbar'>

        <button aria-label='Close side navbar button' onClick={() => toggleSidenav()}
              className="[ fa button ]" data-variant='ghost'>{ TIMES_ICON }</button>

        <ul className='[ nav__links ] [ link-list flex-vertical-items margin-block-1 ]' role='list'>
          <li><Link to="/" className='[ br-100 ]'>Home</Link></li>
          <li><a href="/#influencers" className='[ br-100 ]'>Influencers</a></li>
        </ul>
        
        <Link className='[ side-nav__button ] [ button ]' to='/request'>Start</Link>
      </nav>
    </>
  )
}

export default PrimaryNav;