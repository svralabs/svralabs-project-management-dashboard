import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ScheduleCalendar() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 sticky bg-background dark:bg-background border-b border-border dark:border-outline-variant z-40">
<div className="flex justify-between items-center px-margin py-sm w-full h-16">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-border">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a young designer with glasses, looking directly at the camera with a neutral expression. The background is a clean, solid light grey that matches a professional corporate modernist aesthetic. High-quality soft lighting emphasizes clarity and a minimalist, professional vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzTgp7-RkTOA-S-sTUhOXce0EPXSr--velM90M-NwLt4dNuuaHElGJ9VwdGoYqvavCmF9LiV9SBG3ao1DQNB-zu4snZDRM-EArz14CUk6MY9Aa_rWyKQCmJxFPHulkknYVej9Sz_GA0JTdAJ__ccRPx4nEAJvuexJ4yKk933_eFdUPJSupMC387s7SyWPcxlQeidD3FVLVxj7TM18ttZzx7uAyRROvH8iu5yROXxQB3R80D4WQtN5"/>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile text-primary dark:text-inverse-primary">TaskFlow</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">notifications</span>
</button>
</div>
</header>
<main className="px-margin pt-lg space-y-lg max-w-md mx-auto">

<section className="flex items-center justify-between">
<h2 className="font-heading-md text-heading-md text-tx-primary">November 2025</h2>
<div className="flex gap-2">
<button className="w-9 h-9 border border-border bg-surface rounded-lg flex items-center justify-center hover:bg-bg-canvas transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-9 h-9 border border-border bg-surface rounded-lg flex items-center justify-center hover:bg-bg-canvas transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</section>

<div className="bento-card p-md">
<div className="grid grid-cols-7 gap-y-4 text-center">

<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Mo</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Tu</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">We</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Th</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Fr</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Sa</div>
<div className="font-label-caps text-label-caps text-outline uppercase pb-2">Su</div>

<div className="h-10"></div>
<div className="h-10"></div>
<div className="h-10"></div>
<div className="h-10"></div>
<div className="h-10"></div>

<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">1</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">2</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">3</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">4</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">5</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums relative">
                    6
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary"></span>
</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">7</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">8</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">9</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">10</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">11</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums text-white bg-primary rounded-full aspect-square w-10 mx-auto shadow-sm">12</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">13</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums relative">
                    14
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-tertiary"></span>
</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">15</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">16</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">17</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">18</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">19</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">20</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">21</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">22</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">23</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">24</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">25</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">26</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">27</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">28</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">29</div>
<div className="h-10 flex items-center justify-center font-body-base text-body-base tabular-nums">30</div>
</div>
</div>

<section className="space-y-md">
<h3 className="font-heading-md text-heading-md text-tx-primary">Today's meeting</h3>
<div className="space-y-gutter">

<div className="bento-card p-md flex gap-md items-start">
<div className="tabular-nums font-body-base text-body-base text-outline min-w-[64px] pt-1">
                        10:00 AM
                    </div>
<div className="flex-1 space-y-sm">
<div className="flex justify-between items-start">
<h4 className="font-body-base font-semibold text-tx-primary">Design Sync - Mobile App</h4>
<span className="px-2 py-0.5 rounded-sm bg-secondary-container text-primary text-[10px] font-bold uppercase tracking-wider">Urgent</span>
</div>
<div className="flex -space-x-2 pb-2">
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a software engineer with a minimalist aesthetic, softly lit, neutral background, professional corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsAWR5_K6Td11Mr8g8BQecET_GxpyG-UpWk60j9_ihC3Ls7Jb35R6QOBCovdHs-Rc3f1xbRaN5YAfPSROuS35LCjP9OMF0TyEQFRfCctxBIhx6MGjZUP73JIe-9scXP9pcHlU7zFY94hn06TmrbAnBJErP0veG7vlyFQqwRz2ACuW_vIqo6_WMxBgG19qwsVBt92qcVFiGLU0-PLQrB2YXJOJ9-WynjYDJtaizc1dGCqSAFLhxNs-d"/>
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a female project manager, bright studio lighting, minimalist composition, corporate modernist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmrWXbfz-B-2MA4_136JDGoaSX2CBdLOIUn567XRAMiORKBZ9ygdKzAbVywprj6OypOTfpx04-BaSirkVEW-CLwdjN5HR8bWh5z7URH8qI8u0AF056Evh6lYif-H1n9zT7dGE9eirpeJ2-Js-QNnCnsasn_nl7mCkuaXZ7GGKBOfd_3eh_XHI_A7IxPEEhmvUjvR3CtvmNK6tbkjWOrQXSZTDNtSRTPC6XzqHkwooDTd0UtEypjcV"/>
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant flex items-center justify-center text-[10px] font-bold text-outline">
                                +3
                            </div>
</div>
<button className="w-full py-2 px-4 bg-primary text-surface rounded-full font-body-base font-medium flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">video_call</span>
                            Join meet
                        </button>
</div>
</div>

<div className="bento-card p-md flex gap-md items-start">
<div className="tabular-nums font-body-base text-body-base text-outline min-w-[64px] pt-1">
                        02:30 PM
                    </div>
<div className="flex-1 space-y-sm">
<div className="flex justify-between items-start">
<h4 className="font-body-base font-semibold text-tx-primary">Stakeholder Update</h4>
</div>
<p className="font-body-base text-sm text-outline">Quarterly roadmap review</p>
<button className="w-full py-2 px-4 border border-border text-primary rounded-full font-body-base font-medium flex items-center justify-center gap-2 hover:bg-bg-canvas active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">calendar_add_on</span>
                            Join meet
                        </button>
</div>
</div>
</div>
</section>

<section className="space-y-md">
<h3 className="font-heading-md text-heading-md text-tx-primary">Project Status</h3>
<div className="bento-card p-lg space-y-md">
<div className="flex justify-between items-end">
<div>
<p className="font-label-caps text-label-caps text-outline uppercase mb-1">Active Project</p>
<h4 className="font-heading-md text-tx-primary">Delivery App UI Kit</h4>
</div>
<span className="font-body-base tabular-nums font-bold text-primary">65%</span>
</div>

<div className="w-full h-3 bg-surface-variant rounded-full overflow-hidden">

<div className="h-full bg-primary w-[65%] rounded-full relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="flex justify-between text-[11px] font-medium text-outline pt-1">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                        14 Tasks done
                    </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
                        8 Tasks remaining
                    </span>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-lg py-sm mx-auto fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-full bg-inverse-surface dark:bg-surface-container-highest">
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full w-12 h-12 hover:opacity-80 transition-opacity active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">calendar_month</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">add</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>



    </div>
  );
}
