export const Medias: Media[] = [
  {
    title: 'Wechat 微信 ｜卡尔',
    description: '链接好友｜互相交流｜学习群主力',
    website: '',
    avatar: '/img/multiMedia/wechat.png',
  },
  {
    title: '公众号｜卡尔的AI沃茨',
    description: '各类AI图文教程主力平台｜视频号同名',
    website: 'https://mp.weixin.qq.com/s/vYioQPvHH54tsiYMiEOY5g',
    avatar: '/img/multiMedia/gong.png',
  },
  {
    title: '小红书｜阿汤AI搞事儿',
    description: '专注于AI视频 & AI图像创作',
    website: 'https://www.xiaohongshu.com/user/profile/5b003bce11be10430bf33433?xhsshare=CopyLink&appuid=653ddc410000000004008e8a&apptime=1714114682',
    avatar: '/img/multiMedia/red.png',
  },
  {
    title: '即刻｜卡尔的AI沃茨',
    description: '分享AI信息合集｜AI探索站圈友',
    website: 'https://okjk.co/K9WU8j',
    avatar: '/img/multiMedia/jike.png',
  },
  {
    title: 'Bilibili｜卡尔的AI沃茨',
    description: '长视频新人｜私域课程大卖后的尝试',
    website: 'https://space.bilibili.com/1820008345?spm_id_from=333.1007.0.0',
    avatar: '/img/multiMedia/bili.png',
  }, 
  {
    title: '知乎',
    description: '长篇图文教程｜与公众号同步',
    website: 'https://www.zhihu.com/people/carl-aiwarts',
    avatar: '/img/multiMedia/zhihu.png',
  },
  {
    title: '马上上线',
    description: 'Medium｜Youtube ｜ 少数派',
    website: 'https://www.youtube.com/channel/UCg9CRIZt2ByjtR_l0Z7OY3w',
    avatar: '/img/multiMedia/medium.png',
  }
]

export type Media = {
  title: string
  description: string
  website: string
  avatar?: string
}
