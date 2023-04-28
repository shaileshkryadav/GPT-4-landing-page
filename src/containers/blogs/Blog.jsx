import React from 'react';
import "./blog.css";
import Articles from '../../components/articles/Articles';
import {blog01, blog02, blog03, blog04, blog05}  from "./blogimport";

function Blog() {
  return (
    <div className='gpt4__blog section__wrapper'>
      <div className='gpt4__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt4__blog-container'>
        <div className='gpt4__blog-container_groupA'>
            <Articles imageUrl={blog01} date="jan 23, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt4__blog-container_groupB'>
          <Articles imageUrl={blog02} date="jan 23, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?"/>
          <Articles imageUrl={blog03} date="jan 23, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?"/>
          <Articles imageUrl={blog04} date="jan 23, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?"/>
          <Articles imageUrl={blog04} date="jan 23, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}
 
export default Blog;