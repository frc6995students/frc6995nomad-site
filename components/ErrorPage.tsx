import React from 'react'
import Head from 'next/head'
import { PageHead } from './PageHead'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>{title}</title>
      </Head>

      <div className={"container"}>
        <main className={"main"}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}
        </main>
      </div>
    </>
  )
}
