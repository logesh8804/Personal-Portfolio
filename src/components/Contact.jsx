import cme from '../assets/contactme.png'

export default function Contact()
{
    const config = {
        github : '', //enter your detail here
        linkedin : '',  //enter your detail here
        email : '',  //enter your detail here
        phoneno : ''  //enter your detail here
    }

    return (
        <section className="flex flex-col md:flex-row bg-primary px-5 py-20" id="contact">
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[400px] ' src={cme} />
            </div>
            <div className=" w-1/2 flex flex-col items-center text-white mt-10">
                <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold ">Contact</h1>
                <p className="pb-5">If you want to discuss more in detail, Please contact me</p>
                <p className="py-2"><span className="font-bold">Github : </span> <a href={config.github}>{config.github}</a> </p>
                <p className="py-2"><span className="font-bold">Linkedin : </span> <a href={config.linkedin}>{config.linkedin}</a> </p>
                <p className="py-2"><span className="font-bold">Email : </span> {config.email} </p>
                <p className="py-2"><span className="font-bold">Phone no : </span> {config.phoneno} </p>
            </div>
        </section>
    )
}