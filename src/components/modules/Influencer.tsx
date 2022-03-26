import { INF_Influencer } from '../../interfaces';

const Stat = ({ stat } : { stat: [string | number, string | number] }) => {
  return (
    <div className='[ stat ]'>
      <p className='[ stat__name ]'>{ stat[0] }</p>
      <p className='[ stat__value ] [ text-neutral-300 ]'>{ stat[1] }</p>
    </div>
  )
}

const Influencer = ({ influencer } : { influencer: INF_Influencer }) => {
  return (
    <div className='[ influencer ] [ card flex-between ]' data-background='light'>
        <a href={influencer.link} className='[ link fs-450 ]' target='_blank'>{ influencer.username }</a>
        <div className="[ stats ] [ text-center flex-horizontal-items flex-wrap ]">
          <Stat stat={['Followers', influencer.followers]} />
        </div>
    </div>
  )
}

export default Influencer;