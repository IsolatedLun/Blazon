import { Link } from "react-router-dom";

const PrimaryNav = () => {
  return (
    <nav aria-label="Primary navigation" role='Primary navigation' className='[ primary-navbar ] [ flex-between ]'>
        <h1 className="[ nav__title ] [ header-700 clr-primary-400 ]">Blazon</h1>
        <ul className='[ nav__links ] [ link-list flex-horizontal-items ]' role='list'>
          <li><Link to="/" className='[ br-100 ]'>Home</Link></li>
          <li><a href="/#influencers" className='[ br-100 ]'>Influencers</a></li>
        </ul>
        <Link className='button' to='/request' data-variant='primary'>Start</Link>
    </nav>
  )
}

export default PrimaryNav;