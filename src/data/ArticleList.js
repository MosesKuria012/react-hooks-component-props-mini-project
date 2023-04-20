import React from 'react'
import blogData from '../data/blog'

console.log(blogData)

function App() {
  const blogName = 'Overreacted'
  const imageURL = 'https://via.placeholder.com/215'
  const titleAtr = 'blog logo'

  return (
    <div className="App">
      <Header name={blogName} />

      <aside>
        <img imageURL={imageURL} titleAtr={titleAtr} />
        <p>
          Personal Blog by <a href=" https://overreacted.io/"> Dan Abramov</a>
          <br /> <br />I explain with words and code.
        </p>
      </aside>
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

export default App
