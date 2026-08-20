import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectInquiryCleanBackground() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-ink/80 backdrop-blur-md border-b border-mist/10">
<div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="font-h1 text-h1 tracking-tighter text-on-surface">PORTFOLIO</div>
<div className="hidden md:flex gap-8">
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">WORK</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">SERVICES</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">ABOUT</a>
<a className="font-nav-link text-nav-link uppercase text-ember font-bold border-b-2 border-ember pb-1 transition-all duration-300 ease-out active:scale-95" href="#">CONTACT</a>
</div>
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-nav-link text-nav-link uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,90,31,0.4)]">
                HIRE ME
            </button>
</div>
</nav>
<main className="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

<header className="mb-16 md:mb-24 animate-reveal">
<h1 className="font-kanit font-black text-[14vw] md:text-[10vw] leading-none tracking-tighter text-on-surface uppercase opacity-100">
                PROJECT<br/><span className="text-ember">INQUIRY</span>
</h1>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<aside className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-12 animate-reveal" style={{animationDelay: '0.2s'}}>
<div className="space-y-8 border-l border-mist/10 pl-8">
<div className="group">
<p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Location</p>
<p className="font-body-lg text-xl font-medium group-hover:text-ember transition-glow flex items-center gap-2">
<span className="material-symbols-outlined">location_on</span> Based in Jakarta
                        </p>
</div>
<div className="group">
<p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Current Availability</p>
<p className="font-body-lg text-xl font-medium flex items-center gap-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
</span>
                            Q4 2024
                        </p>
</div>
<div className="group">
<p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Average Response</p>
<p className="font-body-lg text-xl font-medium flex items-center gap-2">
<span className="material-symbols-outlined">schedule</span> Within 24h
                        </p>
</div>
</div>
<div className="relative overflow-hidden rounded-lg aspect-video w-full grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" data-alt="A moody, high-contrast aerial shot of Jakarta's skyline at night, glowing with amber lights and deep shadows. The architectural lines are sharp and brutalist, matching the tech-noir aesthetic of the Ember and Ink design system. Cinematic lighting and a subtle grain effect give it a professional, high-end portfolio feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0aiS3GG8fqD3FuQCcqOmmRi6VSK20tIKKz20eyAU233AirFin-bSFlM_phJu2Bbiv21sr6aM3Zg5lCOu8_UpA3kUkVrnRuEIgWZQf8lUF_s_DemJMqR-2RKA2-kBkKRX6MQ5H0_NxSjN_L1VDCJnNGCJnwsqrV6fVRjo_iaQjo8HiWtJ6Kw_XD4wz-KVGGEXtZsNlJLRsuEJeF9Fo_g5dkHbCjeSsBisX4khkLgh2PiljcnlrcgN"/>
</div>
</aside>

<section className="lg:col-span-8 order-1 lg:order-2 animate-reveal" style={{animationDelay: '0.1s'}}>
<form className="space-y-12">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor="name">Your Name</label>
<input className="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor="email">Email Address</label>
<input className="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor="company">Company / Organization</label>
<input className="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container" id="company" placeholder="The Future Inc." type="text"/>
</div>

<div className="flex flex-col gap-6">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant">Project Type</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="hidden peer" name="project_type" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Web App</span>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="project_type" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Design System</span>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="project_type" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">UI Engineering</span>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="project_type" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">Performance</span>
</label>
</div>
</div>

<div className="flex flex-col gap-6">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant">Budget Range</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="hidden peer" name="budget" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">&lt; $5k</span>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="budget" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">$5k - $10k</span>
</label>
<label className="cursor-pointer">
<input checked="" className="hidden peer" name="budget" type="radio"/>
<span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">$10k+</span>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor="details">Project Details</label>
<textarea className="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container resize-none" id="details" placeholder="Tell me about your vision, goals, and any specific challenges..." rows="5"></textarea>
</div>
<div className="pt-8">
<button className="group relative w-full md:w-auto px-12 py-5 rounded-full bg-ember text-white font-kanit font-bold text-xl uppercase tracking-wider overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,90,31,0.5)]" type="submit">
<span className="relative z-10 flex items-center justify-center gap-3">
                                SEND INQUIRY 
                                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</form>
</section>
</div>
</main>

<footer className="w-full py-section-gap-sm border-t border-mist/10 bg-ink">
<div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-stack-md">
<div className="font-h1 text-h1 text-on-surface">PORTFOLIO</div>
<div className="flex gap-8">
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">GITHUB</a>
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">LINKEDIN</a>
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">TWITTER</a>
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-ember transition-colors duration-300" href="#">INSTAGRAM</a>
</div>
<div className="font-caption text-caption uppercase text-on-surface-variant opacity-80">
                © 2024 FRONTEND ARCHITECT. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>


    </div>
  );
}
