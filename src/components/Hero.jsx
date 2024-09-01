import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <p>READY TO JOIN</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>FIT<span className='text-blue-400'>FAM</span></h1>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unrecognizeable</span> and accept all risks of becoming the <span className='text-blue-400 font-medium'>greatest version of me</span>, and potentially start feeling unbelievably good with increased energy.</p>
            <button className='px-8 py-4 rounded-md'>
                <p>Accept & Begin</p>
            </button>
        </div>
    )
}
