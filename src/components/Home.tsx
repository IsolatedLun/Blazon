import platformData from './json/platforms.json';
import Card from './modules/Card';

const Home = () => {
  return (
    <section className='[ home ]' aria-label='Home section'>
        <div className="[ showcase ] [ flow text-center margin-bottom-2 ]">
            <h2 className='clr-primary-400'>Blazon</h2>
            <p className='text-neutral-300'>Make your projects spread like wildfire and 
            reach millions of people in a matter of hours.</p>
            <button className="button" data-variant='ghost'>Request promo</button>
        </div>

        <div className="[ platforms ] [ flow grid-center margin-block-1 text-center ]">
            <h2 className='[ platform__header ] [ header-700 clr-primary-400 ]'>Our platforms</h2>

            <div className="[ cards ] [ flex-wrap flex-horizontal-items ]">
                {
                    platformData.map(platform => <Card { ...platform } />)
                }
            </div>

        </div>
    </section>
  )
}

export default Home