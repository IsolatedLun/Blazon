import { INF_Process } from '../../interfaces'

const Process = ({ process } : { process: INF_Process }) => {
  return (
    <div className='[ process__item ] [ flow card ]' data-background='light'>
        <p className='[ fa ] [ header-800 clr-primary-400 ]' aria-hidden='true'>{ process.icon }</p>
        <h3 className='clr-primary-100'>{ process.title }</h3>
        <p className='text-neutral-300'>{ process.text }</p>
    </div>
  )
}

export default Process;