import { FiPhoneCall, } from 'react-icons/fi'
import { AiOutlineMessage } from 'react-icons/ai'
import Marquee from 'react-fast-marquee'

function Contact() {
    return (
        <div className='mb-10 '>

            <Marquee>
                <h2 className='text-4xl text-center  text-cyan-400 '>WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h2>
            </Marquee>

            <h2 className="text-2xl text-center mb-6">
                ALWAYS ON YOUR SIDE WHEN YOU NEED HELP
            </h2>
            <div className='flex justify-center items-center gap-6'>
                <div className='border-2 p-12 '>
                    <div className='text-5xl '><FiPhoneCall /></div>
                    <p>HAVE ANY DOUBTS?</p>
                    <h2 className='text-3xl'>CALL US NOW</h2>
                    <p className='text-sm'>This Number is Toll Free</p>
                    <p className='text-sm'>0000 - 123 - 456789</p>
                </div>
                <div className=' border-2 p-12'>
                    <div className='text-5xl'><AiOutlineMessage /></div>

                    <p className=''>WANNA TALK TO US?</p>
                    <h2 className='text-3xl'>LIVE CHAT NOW</h2>
                    <p className='text-sm'>Nullam quis ante. Etiam sit amet orci eget eros faucibus</p>
                    <p className='text-sm'>tincidunt. Duis leo.Lorem ipsum dolor</p>
                </div>

            </div>
        </div>
    )
}

export default Contact