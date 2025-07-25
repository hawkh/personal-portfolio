import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Get the repository name from environment variable during build
  const repoName = process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
    : '';
  
  // Only add base path in production
  const basePath = process.env.NODE_ENV === 'production' ? repoName : '';
  
  return (
    <Html lang="en" className="dark">
      <Head>
        {/* Add base tag for GitHub Pages deployment */}
        {basePath && <base href={basePath} />}
      </Head>
      <body className="dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}