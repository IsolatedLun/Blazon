import platformData from './json/platforms.json';
import Card from './modules/Card';
import sectionData from './json/sections.json'
import { Link } from 'react-router-dom';
import Process from './modules/Process';
import { INF_Platform, INF_Process } from '../interfaces';

const Home = () => {
  return (
    <section className='[ home ] [ ]' aria-label='Home section'>
        <div className="[ showcase ] [ margin-bottom-1 flow text-center ]">
            <h2 className='[ clr-primary-400 header-700 ]'>Blazon</h2>
            <p className='text-neutral-300'>Make your projects spread like wildfire and 
            reach millions of people in a matter of hours.</p>
            <Link className="[ button inline-block ]" to='/request' data-variant='ghost'>Request promo</Link>
        </div>

        <div className="[ process ] [ text-center ]">
            <h2 className='[ clr-primary-400 header-700 margin-bottom-1 ]'>How does it work?</h2>
            <div className='[ process__grid ] [ grid-items-3 ]'>
                { (sectionData as INF_Process[]).map(process => (
                    <Process process={process} />
                )) }
            </div>
        </div>

        <div id='influencers' className="[ platforms ] [ flow grid-center margin-block-1 text-center ]">
            <h2 className='[ platform__header ] [ header-700 clr-primary-400 ]'>Our platforms</h2>

            <div className="[ cards ] [ flex-wrap flex-horizontal-items ]">
                {
                    (platformData as INF_Platform[]).map(platform => <Card platform={platform} />)
                }
            </div>

        </div>
    </section>
  )
}

export default Home