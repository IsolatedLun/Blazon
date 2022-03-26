import React, { useState } from "react";
import { INF_RequestForm } from "../interfaces";


const Request = () => {
    const [request, setRequest] = useState<INF_RequestForm>({
        name: '',
        budget: 0,
        telegram: '',
        extraInformation: ''
    })

    const handleInput = (e: React.FormEvent<any>) => {
        const target = e.target as HTMLInputElement;
        setRequest(prevState => ({ ...prevState, [target.name]: target.value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const toSend = `
        Project name: ${request.name} 
        Budget: ${request.budget} 
        Telegram: @${request.telegram} 
        Extra: ${request.extraInformation}`;

        window.open(`mailto:isolunaj3@gmail.com?subject=${request.name}'s promotion&body=${toSend}`);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} 
            className='[ request-form ]  [ grid-center text-center flow margin-block-1 ]'>
            <div className="[ form__part ] [ flex-flow flex-col ]">
                <label className='[ header-500 ]' htmlFor='name-input'>Project name *</label>
                <input onInput={(e) => handleInput(e)} name='name'
                    id='name-input' className='[ input br-1 ]' type='text' />
            </div>

            <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
                <label className='[ header-500 ]' htmlFor='budget-input'>Budget *</label>
                <input onInput={(e) => handleInput(e)} name='budget'
                    id='budget-input' className='[ input br-1 ]' type='number' min={1000} />
                <ul className="form-list" data-muted>
                    <li>Budget must be atleast greater than 1000.</li>
                </ul>
            </div>

            <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
                <label className='[ header-500 ]' htmlFor='contact-input'>Telegram *</label>
                <div className="input-container" data-after='@'>
                    <input onInput={(e) => handleInput(e)} name='telegram'
                        id='contact-input' className='[ input br-1 ]' type='text' />
                </div>
                <ul className="form-list" data-muted>
                    <li>This is how we'll contact you.</li>
                </ul>
            </div>

            <div className="[ form__part ] [ flex-flow flex-col flex-center ]">
                <label className='[ header-500 ]' htmlFor='extra-input'>Extra information</label>
                <textarea onInput={(e) => handleInput(e)} name='extraInformation' spellCheck='false'
                    id='extra-input' className='[ input br-1 ]' />
            </div>

            <button className='button' data-variant='ghost'>Send</button>
        </form>
  )
}

export default Request;