const Card = ({ name, url, profile } : { name: string, url: string, profile: string  }) => {
  return (
    <div className="[ card ] [ flex-flow flex-col flex-center flow ]">
        <h3 className="[ header-500 ]">{ name }</h3>
        <div className="card__profile-container">
          <img className='profile' src={`src/images/${profile}`} alt={`${name} profile`} />
        </div>
        <a className='button' data-variant='ghost' data-url href={`/influencers/${url}`}>View influencers</a>
    </div>
  )
}

export default Card;