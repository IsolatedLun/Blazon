const Request = () => {
  return (
    <form className='[ request-form ]  [ grid-center text-center flow margin-block-1 ]'>
        <div className="[ form__part ] [ flex-flow flex-col ]">
            <label className='[ header-500 ]' htmlFor='name-input'>Project name *</label>
            <input className='[ input br-1 ]' type='text' />
        </div>

        <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
            <label className='[ header-500 ]' htmlFor='price-input'>Budget *</label>
            <input className='[ input br-1 ]' type='number' min={1000} />
            <ul className="form-list" data-muted>
                <li>Budget must be atleast greater than 1000.</li>
            </ul>
        </div>

        <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
            <label className='[ header-500 ]' htmlFor='price-input'>Extra information</label>
            <textarea className='[ input br-1 ]' />
        </div>

        <button className='button' data-variant='ghost'>Send</button>
    </form>
  )
}

export default Request;