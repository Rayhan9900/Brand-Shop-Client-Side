import React from 'react'

function Footer() {
    return (
        <div className=''>
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <aside>

                    <p className="font-bold text-4xl mb-5 ">
                        GET OUR UPDATES ALWAYS FAST
                    </p>
                    <p className=' md:text-xl '>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                    <p className='text-accent hover:text-white'>Email Addres : rayhanmahmud990099@gmail.com</p>
                </aside>

                <div>
                    <input className='p-4 rounded-3xl' type="text" name="" placeholder='Enter your email address' id="" />
                    <button className='text-amber-400 bg-rose-600 text-3xl p-2 rounded-xl hover:bg-green-500'>submit</button>
                </div>
                <nav className='md:flex justify-around   gap-8'>
                    <ol>SEARCH | </ol>
                    <ol> HELP | </ol>
                    <ol>INFORMATION   |</ol>
                    <ol>PRIVACY POLICY   |</ol>
                    <ol>SHIPPING DETAILS   |</ol>
                </nav>
            </footer>
        </div>
    )
}

export default Footer