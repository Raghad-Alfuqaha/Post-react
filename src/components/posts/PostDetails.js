import useFetch from '../../useFetch'
const PostDetails = (props) => {
  console.log(props.match.params.id);

  let { data: posts, isloading, errMsg } = useFetch(
  `  http://localhost:4000/posts/${props.match.params.id}`
  );
const handleDelete = ()=>{
  fetch( `  http://localhost:4000/posts/${props.match.params.id}`, {
method:"DELETE",

  })
  .then(()=>{
    props.history.push("/");
  })
}
  
  return (
    <>
    {isloading && <div>lod...</div> }
    {errMsg && <div className='error' >{errMsg}</div> }
    {posts && !isloading && !errMsg && (
      <article className="container post-details">
        <div className="post-details-title">
          <h1> {posts.title}</h1>
          <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
        </div>
        <img
          src={posts.image}
          alt=""
          className="post-details-img"
        />
              <div className="post-author">By: {posts.author ? posts.author : "Ali"}</div>

        <p className="post-details-body">
        {posts.body}
        </p>
      </article>
      ) }
      </>
    );
  };
  
  export default PostDetails;