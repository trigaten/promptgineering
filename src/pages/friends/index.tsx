import CodeBlock from '@theme/CodeBlock'
import FriendCard from './_components/FriendCard'
import { Friends } from '@site/data/friends'
import Layout from '@theme/Layout'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const TITLE = '友链'
const DESCRIPTION = '有很多良友，胜于有很多财富。'
const ADD_FRIEND_URL = 'https://github.com/LearnPrompt/LP/edit/v4/data/friends.tsx'
const SITE_INFO = `
title: '卡尔'
description: '让每个人成为AI创作者
website: 'https://www.learnprompt.pro/'
avatar: '/img/logo.png'
`

function SiteInfo() {
  return (
    <div className={styles.siteInfo}>
      <CodeBlock language="yaml" title="本站信息">
        {SITE_INFO}
      </CodeBlock>
    </div>
  )
}

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a className="button button--primary" href={ADD_FRIEND_URL} target="_blank" rel="noreferrer">
        🔗 申请友链
      </a>
    </section>
  )
}

function FriendCards() {
  const friends = Friends

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
