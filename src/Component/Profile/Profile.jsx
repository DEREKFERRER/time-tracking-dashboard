import Avatar from '../../assets/images/image-jeremy.png';

const Profile = ({ selected, handleClick}) => {

    return (
        <>
            <div className='bg-DarkBlue rounded-[15px] lg:row-span-2'> 
                <div className='bg-Blue font-light rounded-[15px] pt-8 pb-8 pl-6 pr-6 flex items-center lg:flex-col lg:items-start'>
                <img className='w-20 rounded-full border-solid border-4 border-white lg:w-14' src={Avatar} alt="" />
                    <div className='ml-4 lg:ml-0 lg:mt-5 '>
                        <p className='text-PaleBlue'>Report for</p>
                        <h1 className='text-[1.4rem] mobile:text-[1.9rem] '>Jeremy Robson</h1>
                    </div>
                </div>
                <div className='flex justify-between p-6 text-[1.1rem] rounded-[15px] text-DesaturatedBlue lg:grid lg:p-0 lg:px-5 lg:py-5 lg:gap-2'>
                    <a className={`hover:text-white cursor-pointer ${selected === "daily" ? 'text-white' : ''}`} onClick={() => handleClick("daily")}>Daily</a>
                    <a className={`hover:text-white cursor-pointer ${selected === "weekly" ? 'text-white' : ''}`} onClick={() => handleClick("weekly")}>Weekly</a>
                    <a className={`hover:text-white cursor-pointer ${selected === "monthly" ? 'text-white' : ''}`} onClick={() => handleClick("monthly")}>Monthly</a>
                </div>
            </div>
        </>
    )
}

export default Profile;