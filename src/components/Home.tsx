import React from 'react'

const Home = () => {
  return (
    <section className='[ home ]' aria-label='Home section'>
        <div className="showcase">
            <h2 className='clr-primary-400'>Blazon</h2>
            <p className='text-neutral-300'>Make your projects spread like wildfire and reach millions of people.</p>
        </div>

        <div className="platforms">
            <h2 className='clr-primary-400'>Our platforms</h2>

            <div className="[ cards ] [ flex-wrap flex-horizontal-items ]">
                <div className="[ card ] [ flex-flow flex-col ]">
                    <h3>Tiktok</h3>
                    <img src="" alt="Tiktok profile" />
                    <a className='link' href='#'>View influencers</a>
                </div>
                <div className="[ card ] [ flex-flow flex-col ]">
                    <h3>Tiktok</h3>
                    <img className='profile' src="" alt="Tiktok profile" />
                    <a className='link' href='#'>View influencers</a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Home