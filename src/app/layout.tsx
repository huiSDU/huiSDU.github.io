import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import './globals.css';
export const metadata: Metadata = { title: `${profile.name} | 密码学与研究`, description: '王晖，山东大学网络空间安全学院对称密码实验室2025级硕士研究生，研究对称密码算法的几何分析方法，关注高性能安全密码算法设计。Hui Wang — geometric analysis of symmetric ciphers.', icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` }, robots: { index: true, follow: true } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
