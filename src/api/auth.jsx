import React from 'react';

export function login(credentials) {
  // ponytail: hardcoded response, replace when real auth API ready
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  }).then(res => res.json());
}

export default function Auth(props) {
  return <div className='p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700'>{props.children || 'auth'}</div>;
}
