import React from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from '../utils/swoldier'

function Header(props) {
    const { index, title, description } = props;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
                    {index}
                </p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    );
}

export default function Generator() {
    return (
        <SectionWrapper
            id={"generate"}
            header={"generate your fitness plan"}
            title={["It's", "FREE", "Medicine"]}
        >
            <Header
                index={"01"}
                title={"Pick Your Workout"}
                description={"Select a workout to push you to new limits. No half-hearted choices here!"}
            />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {/* {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })} */}
            </div>


            <Header index={'02'} title={'Zero In'} description={"Select which muscle groups you want to work hard on today."} />
            <Header index={'03'} title={'Crush Your Goal '} description={"Select your ultimate objective. Bring your A-game!"} />
        </SectionWrapper>
    );
}
