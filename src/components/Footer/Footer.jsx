import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <aside>

                    <p className="font-bold text-4xl mb-5 ">
                        GET OUR UPDATES ALWAYS FAST
                    </p>
                    <p className='text-xl '>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                </aside>

                <input className='p-4 rounded-3xl' type="text" name="" placeholder='Enter your email address' id="" />
                <nav className='flex justify-around   gap-8'>
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