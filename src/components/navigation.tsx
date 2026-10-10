'use client';
import { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import type { Language } from '@/data/profile';
import { translations } from '@/data/translations';
export function Navigation({ name, sections, language, onLanguageChange }: { name: string; sections: { id: string; label: string }[]; language: Language; onLanguageChange: (language: Language) => void }) {
  const t = translations[language];
  const [open, setOpen] = useState(false); const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-15% 0px -55% 0px' });
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [sections]);
  return <header className="site-header"><div className="header-inner"><a className="brand" href="#about" aria-label={`${name} · ${t.homepage}`}><Leaf size={22} strokeWidth={1.6}/><span>{name}</span><span className="brand-divider"/><span className="brand-caption">{t.homepage}</span></a><div className="header-actions"><nav id="navigation" aria-label={t.navigation} className={open ? 'navigation open' : 'navigation'}>{sections.map(s => <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined} className={active === s.id ? 'active' : ''} onClick={() => setOpen(false)}>{s.label}</a>)}</nav><div className="language-switch" role="group" aria-label={t.language}><button lang="zh-CN" aria-pressed={language === 'zh'} onClick={() => onLanguageChange('zh')}>中</button><span aria-hidden="true">/</span><button lang="en" aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>EN</button></div><button className="menu-toggle" aria-label={open ? t.close : t.open} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div></header>;
}
