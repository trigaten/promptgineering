export const projects: Project[] = [
  {
    title: 'ChatGPT账号',
    description: 'GPT 带5刀api = 35元｜GPT4 30天独享/代充 200~240元',
    preview: '/img/project/ChatGPT35.png',
    website: 'https://shop.liuliangbang.vip/buy/30?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI账号',
  },
  {
    title: 'GPT4合租',
    description: '40(10人月付) ｜100（4人月付） ',
    preview: '/img/project/GPT4Group.png',
    website: 'https://shop.liuliangbang.vip/buy/18?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI账号',
  },
  {
    title: 'GPT3 API',
    description: 'gpt-3.5-turbo-1106 ¥0.00154 / 1K tokenss起 | gpt-3.5-turbo-instruct ¥0.00277 / 1K tokens起 ',
    preview: '/img/project/GPT35API.png',
    website: '',
    tags:['contact'],
    type: 'API服务',
  },
  {
    title: 'GPT4 API',
    description: 'gpt-4-1106-preview ¥0.03 / 1K tokens起 | gpt-4  ¥0.09 / 1K tokens起 ',
    preview: '/img/project/GPT4API.png',
    website: '',
    tags: ['contact'],
    type: 'API服务',
  },
  {
    title: 'Go API',
    description: '同时支持Midjourney, Stable Diffusion, GPT3.5, GPT4, GPT-4-vision, DALLE3, Suno & 专属优惠码 AIWARTSPROMOCODE',
    preview: '/img/project/GoAPI.png',
    website: 'https://www.goapi.ai/',
    tags: ['contact'],
    type: 'API服务',
  },
  {
    title: 'MidJourney API',
    description: '低至 $0.015 / image & 专属优惠码 AIWARTSPROMOCODE',
    preview: '/img/project/MJAPI.png',
    website: 'https://www.goapi.ai/midjourney-api',
    tags:[],
    type: 'API服务',
  },
  {
    title: 'Stable Diffusion API',
    description: '低至 $0.0014 / image & 专属优惠码 AIWARTSPROMOCODE',
    preview: '/img/project/SDAPI.png',
    website: 'https://www.goapi.ai/stable-diffusion-api',
    tags: [],
    type: 'API服务',
  },
  {
    title: 'GPTs or Assistants API',
    description: 'AI应用开发必备 & 量大优惠',
    preview: '/img/project/GPTsVsAssist.png',
    website: '',
    tags: ['contact'],
    type: 'API服务',
  },
  {
    title: 'GPT API（大额专属）',
    description: '3.5和4都可用｜API 额度$2,000 价格￥1,200｜额度$5,000 价格￥2,500',
    preview: '/img/project/GPTMore.png',
    website: '',
    tags: ['contact'],
    type: 'API服务',
  },
  {
    title: 'MidJourney',
    description: '全球首款AI生成视频｜350/月',
    website: 'https://shop.liuliangbang.vip/buy/26?skuId=&customId=aiwarts',
    preview: '/img/project/MidJourney.png',
    tags: [],
    type: 'AI账号',
  },
  {
    title: 'Poe会员',
    description: '多个AI大模型共用｜280元/月',
    website: 'https://shop.liuliangbang.vip/buy/35?skuId=&customId=aiwarts',
    preview: '/img/project/POE.png',
    tags: [],
    type: 'AI账号',
  },
  {
    title: 'Office 365',
    description: '正版软件｜100元/12月',
    website: 'https://shop.liuliangbang.vip/buy/43?skuId=&customId=aiwarts',
    preview: '/img/project/365.png',
    tags: [],
    type: 'AI账号',
  },
  {
    title: 'Runway',
    description: '全球首款AI生成视频｜150/月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    preview: '/img/project/runway.png',
    tags: [],
    type: 'AI账号',
  },
  {
    title: '美区苹果帐号免税州',
    description: '下载海外软件｜10.8元',
    website: '',
    preview: '/img/project/apple.png',
    tags: ['contact'],
    type: 'AI账号',
  },
  {
    title: '独享小火箭账号',
    description: '魔法环境｜32.88元',
    website: '',
    preview: '/img/project/rocket.png',
    tags: ['contact'],
    type: 'AI账号',
  },
  {
    title: 'WildCard - 虚拟VISA卡',
    description: '支持OpenAI等全部AI 账号 & API 等海外自订阅服务。',
    website: 'https://bewildcard.com/i/AIWARTS',
    preview: '/img/project/card.png',
    tags: [],
    type: '虚拟卡',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}
export type TagType = 'contact'|'GPT' | 'GPT4' | 'GPTs' | 'API' | 'Midjourney' | 'DALLE3' | 'Poe' | 'Notion' | 'Office365' | 'Adobe' | 'Runway' | 'Apple' | 'virtualCard';

export type ProjectType = 'AI账号' | '虚拟卡'|'API服务'

export const projectTypeMap = {
  'AI账号': 'AI账号',
  'API服务': 'API服务',
  '虚拟卡': '虚拟卡',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  contact: {
    label: '咨询购买｜联系方式在网页最后',
    description: '咨询方式在网页最后哦～',
    color: '#e9669e',
  },
  API: {
    label: 'API',
    description: 'API',
    color: '#ff4500',
  },
};

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
