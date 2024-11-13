import Ellipsis from '../../assets/images/icon-ellipsis.svg';
import Work from '../../assets/images/icon-work.svg';
import Play from '../../assets/images/icon-play.svg';
import Study from '../../assets/images/icon-study.svg';
import Exercise from '../../assets/images/icon-exercise.svg';
import Social from '../../assets/images/icon-social.svg';
import SelfCare from '../../assets/images/icon-self-care.svg';

import myData from '../../data.json'

    const imagesList = [
        Work,
        Play,
        Study,
        Exercise,
        Social,
        SelfCare
    ]

const TimeTracking = ({ selected }) => {

    const bgColor = [
        'cardwork',
        'cardplay',
        'cardstudy',
        'cardexercise',
        'cardsocial',
        'cardselfcare'
    ]
        
    return (
        <>
       {myData.map((items, index) => (
        <>
            <div key={index} className={`rounded-[15px] relative overflow-hidden h-40 ${bgColor[index]} lg:h-full`}>
                <div className='absolute top-[-8%] right-[4%] lg:top-[-3%] lg:right-[6%]'>
                    <img className='w-[100%]' src={imagesList[index]}  alt="images" />
                </div>
                <div className='bg-DarkBlue  items-center p-6 rounded-[15px]  w-full absolute bottom-0 lg:h-[75%] lg:p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 >{items.title}</h2>
                        <div className='h-2 cursor-pointer'>
                        <img src={Ellipsis} alt="Ellipsis" />
                        </div>
                    </div>
                    <div className='flex items-center justify-between lg:flex-col lg:items-start '>
                        <h2 className='text-[2rem] lg:text-[2.5rem]'>{items.timeframes[selected].current}hrs</h2>
                        <p className='text-PaleBlue text-[1rem]'>Last Week - {items.timeframes[selected].previous}hrs</p>
                    </div>
                </div>
            </div>
         </>
       ))}
        </>
    )
}

export default TimeTracking;