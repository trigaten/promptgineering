import CodeBlock from '@theme/CodeBlock'
import FriendCard from './_components/FriendCard'
import { Friends } from '@site/data/friends'
import Layout from '@theme/Layout'
import React from 'react'
import { Teams } from '@site/data/team'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const TITLE = '团队成员'
const DESCRIPTION = 'LearnPrompt 由众多AI爱好者们共同合作完成，感谢每一位贡献者'
const ADD_FRIEND_URL = 'https://github.com/LearnPrompt/LP/edit/v4/data/team.tsx'
// const SITE_INFO = `
// title: '愧怍'
// description: '道阻且长，行则将至'
// website: 'https://kuizuo.cn'
// avatar: 'https://kuizuo.cn/img/logo.png'
// `

// function SiteInfo() {
//   return (
//     <div className={styles.siteInfo}>
//       <CodeBlock language="yaml" title="本站信息">
//         {SITE_INFO}
//       </CodeBlock>
//     </div>
//   )
// }

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a className="button button--primary" href={ADD_FRIEND_URL} target="_blank" rel="noreferrer">
        🤝 加入我们
      </a>
    </section>
  )
}

function FriendCards() {
  const friends = Teams

  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className={styles.friendContainer}>
        <ul className={styles.friendList}>
          {friends.map(friend => (
            <FriendCard key={friend.avatar} friend={friend} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function FriendLink(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <motion.main ref={ref} className="margin-vert--md">
        <FriendHeader />
        <FriendCards />
        <motion.div drag dragConstraints={ref} className={styles.dragBox}>
          {/* <SiteInfo /> */}
        </motion.div>
      </motion.main>
    </Layout>
  )
}
