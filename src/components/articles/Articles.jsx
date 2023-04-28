import React from 'react'
import "./articles.css";


function Articles({imageUrl , date, title}) {
  return (
    <div className='gpt4__blog-container_article'>
      <div className='gpt4__blog-container_article-image'>
        <img src={imageUrl} alt="blog image" />
      </div>
      <div className='gpt4__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Articles;