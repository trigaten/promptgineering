import Layout from '@theme/Layout'
import type { Props } from '@theme/Layout'
import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function MyLayout({
  children,
  maxWidth,
  ...layoutProps
}: Props & { maxWidth?: number }): JSX.Element {
  return (
    <Layout {...layoutProps}>
      <div className={styles.containerWrapper}>
        <div
          className={clsx(styles.myContainer, 'margin-vert--lg')}
          style={maxWidth ? { maxWidth: `${maxWidth}px` } : {}}
        >
          <main>{children}</main>
        </div>
      </div>
    </Layout>
  )
}
