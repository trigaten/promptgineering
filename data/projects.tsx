export const projects: Project[] = [
  {
    title: 'Runway',
    description: '全球首款AI生成视频｜150/月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI',
  },
  {
    title: 'Runway',
    description: '全球首款AI生成视频｜150/月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI',
  },
  {
    title: 'PS AI',
    description: '全球首款AI生成视频｜150元/月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI',
  },
  {
    title: 'Office 365',
    description: '正版软件｜100元/12月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI',
  },
  {
    title: 'Runway',
    description: '全球首款AI生成视频｜150/月',
    website: 'https://shop.liuliangbang.vip/buy/50?skuId=&customId=aiwarts',
    tags: [],
    type: 'AI',
  },
  {
    title: '美区苹果帐号免税州',
    description: '下载海外软件｜10.8元',
    website: '',
    tags: ['Apple', 'contact'],
    type: 'AI',
  },
  {
    title: '独享小火箭账号',
    description: '魔法环境｜32.88元',
    website: '',
    tags: ['Apple', 'contact'],
    type: 'AI',
  },
  {
    title: 'WildCard - 虚拟VISA卡',
    description: '支持OpenAI等全部AI 账号 & API 等海外自订阅服务。',
    website: 'https://bewildcard.com/i/AIWARTS',
    tags: ['virtualCard'],
    type: 'BankCard',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}
export type TagType = 'contact'|'GPT' | 'GPT4' | 'GPTs' | 'API' | 'Midjourney' | 'DALLE3' | 'Poe' | 'Notion' | 'Office365' | 'Adobe' | 'Runway' | 'Apple' | 'virtualCard';

export type ProjectType = 'AI' | 'BankCard'

export const projectTypeMap = {
  AI: 'AI账号',
  BankCard: '虚拟卡',
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
  GPT: {
    label: 'GPT',
    description: 'GPT',
    color: '#39ca30',
  },
  GPT4: {
    label: 'GPT4',
    description: 'GPT4',
    color: '#dfd545',
  },
  GPTs: {
    label: 'GPTs',
    description: 'GPTs',
    color: '#007acc',
  },
  API: {
    label: 'API',
    description: 'API',
    color: '#ff4500',
  },
  Midjourney: {
    label: 'Midjourney',
    description: 'Midjourney',
    color: '#6a0dad',
  },
  DALLE3: {
    label: 'DALLE3',
    description: 'DALLE3',
    color: '#008080',
  },
  Poe: {
    label: 'Poe',
    description: 'Poe',
    color: '#ff8c00',
  },
  Notion: {
    label: 'Notion',
    description: 'Notion',
    color: '#2f4f4f',
  },
  Office365: {
    label: 'Office365',
    description: 'Office365',
    color: '#8b0000',
  },
  Adobe: {
    label: 'Adobe全家桶',
    description: 'Adobe全家桶',
    color: '#008000',
  },
  Runway: {
    label: 'Runway',
    description: 'Runway',
    color: '#00008b',
  },
  Apple: {
    label: '苹果海外账号',
    description: 'Apple账号',
    color: '#ff1493',
  },
  virtualCard: {
    label: '虚拟卡',
    description: '虚拟卡',
    color: '#1e90ff',
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
