export const Teams: Team[] = [
  {
    title: 'Carl 卡尔',
    description: '8年大厂大模型算法 & ΑI创业者',
    website: 'https://about.me/carlxu', 
    avatar: '/img/friend/carl.png',
  },
  {
    title: 'KC',
    description: '大厂搬砖 | NLPer',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/KC.png',
  },
  {
    title: 'whoiskoala',
    description: '喜欢随便看看的程序员｜腾讯算法',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/whoiskoala.png',
  },
  {
    title: '书田',
    description: '学数学的程序员 | 目前是让AI替自己上班',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/shutian.png',
  },
  {
    title: '小同学',
    description: 'aicg爱好者 | 专注Midjourney等文生图工具',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/xiaotongxue.png',
  },
  {
    title: '欣',
    description: '大厂全勤员工｜华威大学计算机硕士',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/xin.png',
  },
  {
    title: 'ATang',
    description: '影视行业 | AI产品测评 | AI视频生成术',
    website: 'https://www.xiaohongshu.com/user/profile/5b003bce11be10430bf33433?xhsshare=CopyLink&appuid=653ddc410000000004008e8a&apptime=1713875484',
    avatar: '/img/friend/ATang.png',
  },
  {
    title: 'Andy yang',
    description: '全栈工程师 | In 墨尔本',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/Andyyang.png',
  },
  {
    title: '晨辉',
    description: 'AIGC爱好者 | 专注知识付费',
    website: 'https://www.learnprompt.pro',
    avatar: '/img/friend/chen.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
