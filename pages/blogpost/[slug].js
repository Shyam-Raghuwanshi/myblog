import React, { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
// import * as fs from 'fs'

const Slug = (props) => {
      const [blog, setBlog] = useState(props.allBlogs)
      // useEffect(() => {
      //       if (!router.isReady) {
      //             return
      //       }
      //       const url = `http://localhost:3000/api/getblog?slug=${slug}`
      //       fetch(url)
      //             .then((response) => { return response.json() })
      //             .then((data) => {
      //                   setBlog(data)
      //             });

      // }, [router.isReady])
      function createMarkup(c) {
            return { __html: c };
      }

      return (
            <div className={styles.container}>
                  <div className={styles.main}>
                        {/* <h1>{blog && blog.title}</h1> */}
                        <hr />
                        {/* <p>{blog && blog.content}</p> */}

                        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
                  </div>
            </div>
      )
}

// export async function getStaticPaths() {
//       return {
//             paths: [
//                   { params: { slug: 'how-to-learn-javascript' } },
//                   { params: { slug: 'how-to-learn-nextjs' } },
//                   { params: { slug: 'how-to-learn-python' } },
//                   { params: { slug: 'how-to-learn-react' } }

//             ],
//             fallback: true
//       }
// }
// export async function getStaticProps(context) {
//       const { slug } = context.params;
//       let allblogs = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf8')
//       allblogs = JSON.parse(allblogs)
//       return {
//             props: { allblogs }
//       }
// }


// serverside rendering
export async function getServerSideProps(context) {
      try {
            const url = `http://localhost:3000/api/getblog?slug=${context.query.slug}`
            let data = await fetch(url)
            let allBlogs = await data.json()
            return {
                  props: { allBlogs }
            }
      }
      catch {
            console.log('internal server error');
      }

}

export default Slug