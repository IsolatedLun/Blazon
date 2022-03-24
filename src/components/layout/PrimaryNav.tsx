import React from 'react'

const PrimaryNav = () => {
  return (
    <nav role='Primary navigation' className='[ primary-navbar ] [ flex-between ]'>
        <h1 className="[ nav__title ] [ header-700 clr-primary-400 ]">Blazon</h1>
        <ul className='[ nav__links ] [ link-list flex-horizontal-items ]' role='list'>
          <li><a href="#" className='[ br-100 ]'>Home</a></li>
          <li><a href="#" className='[ br-100 ]'>Influencers</a></li>
        </ul>
        <button className='button' data-variant='primary'>Start</button>
    </nav>
  )
}

export default PrimaryNav