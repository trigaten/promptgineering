export const Friends: Friend[] = [
  {
    title: '歸藏',
    description: '产品设计师 | AIGC周刊每周一更新',
    website: 'https://op7418.zhubai.love/',
    avatar: '/img/friend/guizang.png',
  },
  {
    title: '宝玉',
    description: 'Prompt Engineer | 双语AIGC课程强推',
    website: 'https://www.youtube.com/@baoyu_/videos',
    avatar: '/img/friend/baoyu.png',
  },
  {
    title: '小互',
    description: 'AI前沿科技资讯最速分享',
    website: 'https://twitter.com/imxiaohu',
    avatar: '/img/friend/xiaohu.png',
  },
  {
    title: '通往AGI之路',
    description: '中文开源AI知识库',
    website: 'https://waytoagi.com/',
    avatar: '/img/friend/way2agi.png',
  },
  {
    title: '硬地骇客',
    description: '10年+互联网创业者深度思考｜每周二定时更新播客',
    website: 'https://hardhacker.com/',
    avatar: '/img/friend/hacker.png',
  },
  {
    title: 'Dify',
    description: '用于创建 Assistant API 和 GPT 的开发平台',
    website: 'https://github.com/langgenius/dify',
    avatar: '/img/friend/dify.png',
  },
  {
    title: 'AI产品榜',
    description: 'AI产品榜单｜AI产品经理必备',
    website: 'https://aicpb.com/',
    avatar: '/img/friend/aicpb.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
