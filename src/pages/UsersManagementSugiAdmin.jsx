import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UsersManagementSugiAdmin() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-[#fbf9f8] h-screen w-72 flex flex-col fixed left-0 top-0 border-r-0 z-50">
<div className="px-8 py-10">
<h2 className="text-lg font-bold text-[#556347] font-['Plus_Jakarta_Sans'] tracking-tight">Sugi Admin</h2>
<p className="text-sm text-on-surface-variant font-body mt-1">Editorial Control</p>
</div>
<div className="flex flex-col gap-y-2 py-8 h-full font-['Plus_Jakarta_Sans'] font-medium text-sm">
<a className="text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all flex items-center gap-4 group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">dashboard</span>
<span>Dashboard</span>
</a>
<a className="text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all flex items-center gap-4 group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">calendar_today</span>
<span>Bookings</span>
</a>
<a className="text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all flex items-center gap-4 group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">local_offer</span>
<span>Promos</span>
</a>
<a className="text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all flex items-center gap-4 group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">concierge</span>
<span>Services</span>
</a>

<a className="bg-[#C9D9B6] text-[#556347] rounded-full mx-4 px-6 py-3 font-semibold flex items-center gap-4 scale-[0.98] transition-transform duration-150 shadow-sm shadow-primary/5" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>group</span>
<span>Users</span>
</a>
<a className="text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all flex items-center gap-4 group mt-auto mb-8" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">settings</span>
<span>Settings</span>
</a>
</div>
</nav>

<div className="flex-1 ml-72 flex flex-col min-h-screen">

<header className="bg-[#fbf9f8]/80 backdrop-blur-3xl sticky top-0 z-40 shadow-[0_20px_40px_rgba(85,99,71,0.06)] bg-[#f6f3f2] no-border">
<div className="flex justify-between items-center w-full px-8 py-4 h-20">
<div className="text-xl font-bold tracking-tighter text-[#556347] font-['Plus_Jakarta_Sans']">
                    Sugi Booking
                </div>
<div className="flex items-center gap-6">
<button className="text-[#556347] hover:bg-[#f6f3f2] p-2 rounded-full transition-all duration-300 hover:scale-105">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#556347] hover:bg-[#f6f3f2] p-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>account_circle</span>
</button>
</div>
</div>
</header>

<main className="p-12 flex-1 max-w-7xl mx-auto w-full">

<div className="flex justify-between items-end mb-16">
<div className="max-w-2xl">
<h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 font-headline">User Community</h1>
<p className="text-lg text-on-surface-variant font-body leading-relaxed">Curate and oversee your registered members and administrative team. Maintain the standard of the sanctuary.</p>
</div>
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full px-8 py-4 font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-[0_10px_20px_rgba(85,99,71,0.15)] flex items-center gap-2">
<span className="material-symbols-outlined text-sm">person_add</span>
                    Invite User
                </button>
</div>

<div className="flex gap-6 mb-12">
<div className="flex-1 max-w-md bg-surface-container-low rounded-xl px-5 py-4 flex items-center gap-3 focus-within:bg-surface-container-lowest focus-within:ring-1 focus-within:ring-outline-variant/30 transition-all duration-300">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
<input className="bg-transparent border-none outline-none w-full text-on-surface placeholder:text-on-surface-variant/60 font-body text-base" placeholder="Search by name or email..." type="text"/>
</div>
<div className="flex bg-surface-container-low rounded-xl p-1">
<button className="px-6 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-medium text-sm shadow-sm transition-all">All Users</button>
<button className="px-6 py-3 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">Admins</button>
<button className="px-6 py-3 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">Members</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-[0_30px_60px_rgba(85,99,71,0.03)] overflow-hidden">

<div className="grid grid-cols-12 gap-6 p-6 bg-surface-container-low/40 border-b-0 text-xs font-semibold text-on-surface-variant uppercase tracking-widest font-label">
<div className="col-span-4 pl-4">Member Profile</div>
<div className="col-span-2">Role</div>
<div className="col-span-2">Joined</div>
<div className="col-span-2">Last Active</div>
<div className="col-span-2 text-right pr-4">Actions</div>
</div>

<div className="flex flex-col">

<div className="grid grid-cols-12 gap-6 p-6 items-center hover:bg-surface-container-low/50 transition-colors duration-300 group">
<div className="col-span-4 pl-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-lg font-headline shadow-inner">
                                EA
                            </div>
<div>
<div className="font-semibold text-on-surface text-base font-headline">Eleanor Astor</div>
<div className="text-sm text-on-surface-variant font-body">eleanor@sugibooking.com</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-3 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container text-xs font-semibold tracking-wide font-label uppercase">
                                Administrator
                            </span>
</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">Oct 12, 2023</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">2 hours ago</div>
<div className="col-span-2 flex justify-end gap-2 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-error-container/50">
<span className="material-symbols-outlined text-xl">block</span>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-6 p-6 items-center hover:bg-surface-container-low/50 transition-colors duration-300 group">
<div className="col-span-4 pl-4 flex items-center gap-4">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-lowest shadow-sm" data-alt="close up portrait of a smiling man with a beard in natural warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs_euQxLlV3x36z7lTEwXwkGVYicnBDCa0sIchlQUw2XiQNn_TWUyW9wOd-cqVUOT1onE2jBAHxLOZQ20r0NIHYG06DZLdjvW7CmrRioWGjFB8beQ5gjLF--QoMabTL-jjHennhjUCPCnML0PyI9ll19rqsdiStW4sba4uMb7eeMPdUqM5HaSMR9uBfIA2Ampu5fQ4kLN_v1U000LoxijKlRlUTwy7-Rb_uy8D409oFcAiUj_adAJvKzlqL5JG3DA9s8asSiZ5xoc"/>
<div>
<div className="font-semibold text-on-surface text-base font-headline">Julian Hayes</div>
<div className="text-sm text-on-surface-variant font-body">julian.h@example.com</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-3 py-1 rounded-sm bg-surface-container-highest text-on-surface text-xs font-semibold tracking-wide font-label uppercase">
                                Member
                            </span>
</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">Nov 05, 2023</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">Yesterday</div>
<div className="col-span-2 flex justify-end gap-2 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-error-container/50">
<span className="material-symbols-outlined text-xl">block</span>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-6 p-6 items-center hover:bg-surface-container-low/50 transition-colors duration-300 group">
<div className="col-span-4 pl-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-lg font-headline shadow-inner">
                                CW
                            </div>
<div>
<div className="font-semibold text-on-surface text-base font-headline">Clara Winslow</div>
<div className="text-sm text-on-surface-variant font-body">c.winslow@example.com</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center px-3 py-1 rounded-sm bg-surface-container-highest text-on-surface text-xs font-semibold tracking-wide font-label uppercase">
                                Member
                            </span>
</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">Jan 18, 2024</div>
<div className="col-span-2 text-sm text-on-surface-variant font-body">Just now</div>
<div className="col-span-2 flex justify-end gap-2 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-error-container/50">
<span className="material-symbols-outlined text-xl">block</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-between items-center text-sm font-body text-on-surface-variant">
<div>Showing 1 - 3 of 124 members</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-sm">arrow_back</span> Previous
                    </button>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-primary-container text-primary font-semibold flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded-full hover:bg-surface-container-highest text-on-surface transition-colors flex items-center justify-center">2</button>
<button className="w-8 h-8 rounded-full hover:bg-surface-container-highest text-on-surface transition-colors flex items-center justify-center">3</button>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-medium">
                        Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</main>
</div>

    </div>
  );
}
