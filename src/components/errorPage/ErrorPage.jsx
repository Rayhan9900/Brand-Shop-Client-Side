import { Link } from 'react-router-dom'
import error from '../../assets/errorPage.jpg'

function ErrorPage() {
    return (
        <div className='mt-6'>
            <img className='w-full' src={error} alt="" />
            <Link to='/'><button className='btn btn-primary absolute top-6 '>Go Back Home</button></Link>
        </div>
    )
}

export default ErrorPage