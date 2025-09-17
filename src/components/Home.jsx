import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

export default function Home()
{
    const config = { 
        subtitle: 'Junior Frontend Developer | ReactJS Enthusiast',
        social: {
            instagram : '', //place your instagram link here
            facebook : '',  //place your facebook link here
            linkedin : '',  //place your linkedin link here
            github : ''     //place your github link here
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-30 justify-center bg-primary h-full'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-sriracha mt-10'>Hi, <br /> Im <span className='text-black '>Logesh</span>
                <p className='text-2xl '>{ config.subtitle }</p>
                </h1>
                <div className='flex py-5'>
                    <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={30} /></a>
                    <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={30} /></a>
                    <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={30} /></a>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={30} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>
    )
}