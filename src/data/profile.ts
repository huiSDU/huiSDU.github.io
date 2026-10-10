export type Language = 'zh' | 'en';
export type ResearchInterest = { title: string; description: string; icon: 'blocks' | 'network' | 'chart' | 'grid' | 'leaf' };
export type Entry = { title: string; description: string; url?: string; descriptionUrl?: string };
const shared = { location: '', email: 'hui.wang2025@mail.sdu.edu.cn', github: '', linkedin: '', scholar: '', avatar: '/profile.jpg', cvUrl: '', highlights: [] as Entry[], notes: [] as Entry[], publications: [] as Entry[] };
// 所有个人资料和翻译集中维护；未提供的信息留空。
export const profiles = {
  zh: {
    ...shared, name: '王晖', role: '2025级硕士研究生', university: '山东大学', department: '网络空间安全学院', laboratory: '对称密码实验室',
    bio: ['我就读于山东大学网络空间安全学院对称密码实验室，是2025级硕士研究生。我的主要研究方向是对称密码算法的几何分析方法。', '我关注密码算法中的数学结构及其安全性，并对兼顾高性能与安全性的密码算法设计感兴趣。', '在主要研究方向之外，我也学习 GPU / NPU 架构和 AI 基础模型。这些是我持续探索的课外学习兴趣。'],
    tags: ['对称密码', '几何分析', '密码算法设计'],
    researchInterests: [{ title: '对称密码的几何分析', description: '探索对称密码算法的几何分析方法，从数学结构的视角理解密码算法及其安全性。', icon: 'grid' }, { title: '高性能安全密码算法设计', description: '关注兼顾高性能与安全性的密码算法设计，以及效率与安全性之间的关系。', icon: 'blocks' }] as ResearchInterest[],
    learningInterests: ['GPU / NPU 架构', 'AI 基础模型'],
    awards: [{ title: '全国密码数学挑战赛', description: '特等奖', descriptionUrl: 'https://cst.qd.sdu.edu.cn/info/1037/4162.htm' }] as Entry[],
  },
  en: {
    ...shared, name: 'Hui Wang', role: 'Master’s Student · 2025 Cohort', university: 'Shandong University', department: 'School of Cyber Science and Technology', laboratory: 'Symmetric Cryptography Laboratory',
    bio: ['I’m a master’s student in the 2025 cohort at the Symmetric Cryptography Laboratory, School of Cyber Science and Technology, Shandong University. My primary research focuses on geometric methods for analyzing symmetric cryptographic algorithms.', 'I’m interested in the mathematical structures and security of cryptographic algorithms, as well as the design of algorithms that combine high performance with strong security.', 'Beyond my primary research, I also study GPU / NPU architectures and AI foundation models as extracurricular learning interests.'],
    tags: ['Symmetric Cryptography', 'Geometric Analysis', 'Cipher Design'],
    researchInterests: [{ title: 'Geometric Analysis of Symmetric Ciphers', description: 'Exploring geometric methods for analyzing symmetric cryptographic algorithms and understanding their mathematical structures and security.', icon: 'grid' }, { title: 'High-performance, Secure Cipher Design', description: 'An interest in designing cryptographic algorithms that combine high performance with strong security.', icon: 'blocks' }] as ResearchInterest[],
    learningInterests: ['GPU / NPU Architectures', 'AI Foundation Models'],
    awards: [{ title: 'National Cryptographic Mathematics Challenge', description: 'Grand Prize', descriptionUrl: 'https://cst.qd.sdu.edu.cn/info/1037/4162.htm' }] as Entry[],
  },
};
export const profile = profiles.zh;
