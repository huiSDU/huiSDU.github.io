'use client';
import { useState } from 'react';
import { UserRound } from 'lucide-react';
export function Avatar({ src, name, language = 'zh' }: { src: string; name: string; language?: 'zh' | 'en' }) { const [failed, setFailed] = useState(false); return <div className="portrait">{src && !failed ? <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`} alt={language === 'zh' ? `${name}的照片` : `Portrait of ${name}`} width={250} height={313} onError={() => setFailed(true)}/> : <div className="avatar-placeholder"><UserRound size={60} strokeWidth={1}/><span>{language === 'zh' ? '个人照片' : 'Profile photo'}</span></div>}</div>; }
