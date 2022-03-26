import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer aria-label="Footer" className='[ footer ] [ flex-even ]'>
        <div className="[ footer__list-part ] [ flow text-center ]">
            <h4 className='[ list__header ] [ header-400 brdr-underline ]'>Access</h4>
            <ul className='[ footer__list ] [ link-list flex-vertical-items ]' role='list' data-muted data-round>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#influencers">Influencers</a></li>
                <li><Link to='/request'>Request promo</Link></li>
            </ul>
        </div>

        <div className="[ footer__list-part ] [ flow text-center ]">
            <h4 className='[ list__header ] [ header-400 brdr-underline ]'>More</h4>
            <ul className='[ footer__list ] [ link-list flex-vertical-items ]' role='list' data-muted data-round>
                <li><a href="https://github.com/IsolatedLun/Blazon" target='_blank'>Source code</a></li>
                <li><a href='mailto:isolunaj3@gmail.com'>Contact</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;