import React from "react";

export default function Nav() {
    return (

        <nav aria-label="Breadcrumb">
            <ol className="flex justify-between gap-2 px-4 list-none rounded shadow-md h-14 shadow-slate-200 bg-blue-200">
                <li className="flex items-center gap-2">
                    <a href="#" className="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-01 description-01" role="link">
                            <title id="title-01">Home</title>
                            <desc id="description-01">
                             
                            </desc>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-02 description-02" role="graphics-symbol">
                        <title id="title-02">Arrow</title>
                        <desc id="description-02">
                           
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </li>
                <li className="items-center hidden gap-2 md:flex">
                    <a href="#" className="flex max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">Disciplinas</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-03 description-03" role="graphics-symbol">
                        <title id="title-03">Arrow</title>
                        <desc id="description-03">
                            
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </li>
                <li className="flex items-center gap-2">
                    <a href="#" className="flex max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">Biblioteca</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-04 description-04" role="graphics-symbol">
                        <title id="title-04">Arrow</title>
                        <desc id="description-04">
                            
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </li>
                <li className="flex items-center flex-1 gap-2">
                <a href="#" className="flex max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">BLOG</a>
                </li>
                <a href="#" className="relative inline-flex items-center justify-center w-12 h-12 text-lg text-white rounded bg-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title description" role="graphics-symbol">
                    <title id="title">User Icon</title>
                    <desc id="description">
                        
                    </desc>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </a>
            </ol>

            
        
        </nav >
    )
}