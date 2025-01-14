import React from 'react'

const blogData = [
  {
    id: 1,
    title: 'Components 101',
    date: 'December 15, 2020',
    preview: 'Setting up the building blocks of your site',
    minutes: 5,
  },
  {
    id: 2,
    title: 'React Data Flow',
    date: 'December 11, 2020',
    preview: 'Passing props is never passé',
    minutes: 15,
  },
  {
    id: 3,
    title: 'Function vs Class Components',
    preview: 'React, meet OOJS.',
    minutes: 47,
  },
]

function App() {
  const blogName = 'Overreacted'
  const imageURL = 'https://via.placeholder.com/215'
  const titleAtr = 'blog logo'

  return (
    <div className="App">
      <Header name={blogName} imageURL={imageURL} titleAtr={titleAtr} />

      <aside>
        <img src={imageURL} alt={titleAtr} />
        <p>
          Personal Blog by <a href=" https://overreacted.io/"> Dan Abramov</a>
          <br /> <br />I explain with words and code.
        </p>
      </aside>
      <ArticleList articles={blogData} />
    </div>
  )
}

function Header({ name, imageURL, titleAtr }) {
  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
      <img src={imageURL} alt={titleAtr} />
    </>
  )
}

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </main>
  )
}

function Article({ article }) {
  const { title, date = 'January 1, 1970', preview } = article

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

console.log(blogData)

export default App
