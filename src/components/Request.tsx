const Request = () => {
  return (
    <form className='[ request-form ]  [ grid-center text-center flow margin-block-1 ]'>
        <div className="[ form__part ] [ flex-flow flex-col ]">
            <label className='[ header-500 ]' htmlFor='name-input'>Project name *</label>
            <input id='name-input' className='[ input br-1 ]' type='text' />
        </div>

        <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
            <label className='[ header-500 ]' htmlFor='budget-input'>Budget *</label>
            <input id='budget-input' className='[ input br-1 ]' type='number' min={1000} />
            <ul className="form-list" data-muted>
                <li>Budget must be atleast greater than 1000.</li>
            </ul>
        </div>

        <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
            <label className='[ header-500 ]' htmlFor='contact-input'>Telegram *</label>
            <div className="input-container" data-after='@'>
                <input id='contact-input' className='[ input br-1 ]' type='text' />
            </div>
            <ul className="form-list" data-muted>
                <li>This is how we'll contact you.</li>
            </ul>
        </div>

        <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
            <label className='[ header-500 ]' htmlFor='extra-input'>Extra information</label>
            <textarea id='extra-input' className='[ input br-1 ]' />
        </div>

        <button className='button' data-variant='ghost'>Send</button>
    </form>
  )
}

export default Request;