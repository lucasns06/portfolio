import '../blog/blog.css'
const blog = () =>{

    const posts = [
        {
            h1: 'JavaScript',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            data: '27/01/2025'
        },
        {
            h1: 'Seletores css',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            data: '27/01/2025'
        },
        {
            h1: 'HTML Semântico',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            data: '27/01/2025'
        }
    ]
    return(
        <main className="blog__main">
            <h1 className='blog__main__h1'><span className="span">Blog</span> <span className="span">do</span> <span className="span">Lucas N.</span>  </h1>            
            <section>
                {posts.map((item) =>(
                     <article>
                        <h1>{item.h1}</h1>
                        <br />
                        <p>{item.desc}</p> 
                        <br />
                        <h1>{item.data}</h1>
                     </article>
                ))}
            </section>
        </main>
    );
}
export default blog;