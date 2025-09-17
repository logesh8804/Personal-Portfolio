import pro1 from '../assets/portfolio.png'
import pro2 from '../assets/smarteval.png'
import pro3 from '../assets/food-ecommerce.jpg'

export default function Projects()
{
    const config = {
        projects : [
            {
                image : pro1,
                description : 'Project 1 description',
                link : '',
            },
            {
                image : pro2,
                description : 'Project 2 description',
                link : '',
            },
            {
                image : pro3,
                description : 'Project 3 description',
                link : '',
            }
        ]
    }

    return (
        <section className="flex flex-col py-30 px-5 justify-center bg-primary text-white" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl font-bold border-b-4 mb-5 w-[150px] ">Projects</h1>
                    <p>These are my projects. I  built it with Reactjs, HTML, CSS. Check them out</p>
                </div>
            </div>
            <div className="w-full ">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[250px] w-[400px] ' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}