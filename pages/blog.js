import React, { useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

  return <div className={styles.container}>
    <main className={styles.main}>

      {blogs.map((blogitem) => {
        return <div key={blogitem.slug}>
          <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
          <p className={styles.blogItemp}>{blogitem.meta.substr(0, 70)}...</p>
          <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
        </div>
      })}
    </main>
  </div>
};


export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  }
}

export default Blog;