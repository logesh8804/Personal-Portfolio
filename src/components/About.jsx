import AboutImg from '../assets/about.png'

export default function Home()
{
    //place your about details to show yourself
    const config = {
        line1 : 'Hi, My name is Logesh. I am a Frontend developer. Recent Computer Science graduate with a strong interest in frontend development.',
        line2 : 'I am Skilled in React.JS, JAVASCRIPT, Tailwind CSS, HTML and CSS. Eager to learn and apply web development skills in a real-world environment. In backend I know Django, Flask.',
        line3 : 'A responsible and organized individual with a passion for building user-friendly websites.'
    }

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 ' id='about'>
            <div className='md:w-1/2 py-30'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl font-bold border-b-4 mb-5 w-[170px] '>About me</h1>
                    <p className='pb-5'>{ config.line1 }</p>
                    <p className='pb-5'>{ config.line2 }</p>
                    <p className='pb-5'>{ config.line3 }</p>
                </div>
            </div>
        </section>
    )
}