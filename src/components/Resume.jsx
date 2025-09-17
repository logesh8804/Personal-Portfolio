import ResumeImg from '../assets/Resume.jpg'

export default function Resume()
{
    const config = { link : '' }

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 ' id='resume'>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl font-bold border-b-4 mb-5 w-[140px] '>Resume</h1>
                    <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
                </div>
            </div>
            <div className='md:w-1/2 py-32 flex justify-center'>
                <img className='w-[400px] ' src={ResumeImg} />
            </div>
        </section>
    )
}