import React from 'react'

const Footer = () => {
  return (
    <footer className='[ footer ] [ flex-even ]'>
        <div className="[ footer__list-part ] [ flow text-center ]">
            <h4 className='[ list__header ] [ header-400 brdr-underline ]'>Access</h4>
            <ul className='[ footer__list ] [ link-list flex-vertical-items ]' role='list' data-muted data-round>
                <li><a href="/">Home</a></li>
                <li><a href="/influencers">Influencers</a></li>
            </ul>
        </div>

        <div className="[ footer__list-part ] [ flow text-center ]">
            <h4 className='[ list__header ] [ header-400 brdr-underline ]'>More</h4>
            <ul className='[ footer__list ] [ link-list flex-vertical-items ]' role='list' data-muted data-round>
                <li><a href="/">Source code</a></li>
                <li><a href="/influencers">Contact</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;