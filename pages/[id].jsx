function Blog({ posts, params }) {
  console.log({ posts, params })
    return <h1>Hello world</h1>
    // Render posts...
  }

  export async function getStaticPaths() {
    return {
      paths: [{ params: { id: 'example-post' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // This function gets called at build time
  export async function getStaticProps({params}) {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://localhost:3000/api/${params.id}`);
    const posts = await res.json();
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
        params: params,
      },
    }
  }
  
  export default Blog;
