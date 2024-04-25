import { groupByProjects, projectTypeMap, projects } from '@site/data/projects'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import MyLayout from '@site/src/theme/MyLayout'
import React from 'react'
import ShowcaseCard from './_components/ShowcaseCard'
import clsx from 'clsx'
import styles from './styles.module.css'
import { translate } from '@docusaurus/Translate'
import { upperFirst } from '@site/src/utils/jsUtils'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const TITLE = translate({
  id: 'theme.project.title',
  message: '🥳 有号Friends',
})
const DESCRIPTION = translate({
  id: 'theme.project.description',
  message: '🔊 在你探寻AI路上，任何需要的工具帐号，我们都会尽可能的为你提供。\n👬你尽管探索，剩下的我们来帮你解决！   \n📱 收藏店铺地址｜新号一键直达',
})
const CONTACT = translate({
  id: 'theme.project.contact',
  message: '📇联系方式',
})

// const GITHUB_URL = 'https://github.com/kuizuo'

type ProjectState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

export function prepareUserState(): ProjectState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

function ShowcaseHeader() {
  return (
    <section className="text--center">
      <h2>{TITLE}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{DESCRIPTION}</p>
      {/* <h3>快速预览：</h3>
      <ul>
        <li>ChatGPT</li>
        <li>MidJourney</li>
        <li>Poe会员</li>
        <li>Notion</li>
        <li>PSAl</li>
        <li>Offce 365</li>
        <li>Adobe全家桶</li>
        <li>Runway</li>
        <li>Apple账号（其他Al账号急需也可联系我们）</li>
      </ul>
      <h2>产品表（货币单位均为：元）</h2> */}
      {/* <a
        className="button button--primary"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">前往 Github 克隆项目</Translate>
      </a> */}
    </section>
  )
}


function ShowcaseEnd() {
  return (
    <section className="text--center">
      <h2>{CONTACT}</h2>
      <p><strong>微信 Wechat ｜aiwarts101</strong></p>
      <img src="/img/contact.jpg" alt="联系方式" style={{ display: 'block', margin: 'auto' }} />
    </section>
  )
}


function ShowcaseCards() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  if (projects.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>No result</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <>
        <div className="container margin-top--lg">
          <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}></div>

          {Object.entries(groupByProjects).map(([key, value]) => {
            return (
              <div key={key}>
                <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
                  <h3>{upperFirst(lang === 'en' ? key : projectTypeMap[key])}</h3>
                </div>
                <ul className={styles.showcaseList}>
                  {value.map(project => (
                    <ShowcaseCard key={project.title} project={project} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </>
    </section>
  )
}

function Showcase(): JSX.Element {
  return (
    <MyLayout title={TITLE} description={DESCRIPTION} maxWidth={1280}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
        <ShowcaseEnd />
      </main>
    </MyLayout>
  )
}

export default Showcase
