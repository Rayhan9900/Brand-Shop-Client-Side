
import reviews from '../../assets/review.avif'

function CustomarReview() {


    return (
        <div className='mb-5'>
            <h2 className="text-3xl text-center  text-cyan-400 ">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
            <p className='text-xl text-center'>DESIGNED TO PERFECTION</p>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={reviews} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">NEW GRADIENT COLOR FINISHES</h2>
                        <p>Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomarReview