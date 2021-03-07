
function Articles (props){
    

if (!props.data.length) {return (
<div>
<h1>Check Search Parameters - No Stories found</h1>


</div>)}

return(
<div>


<h1>Here are your Stories</h1>

<ul>
      {props.data.map((item,index)=>{
        return <div key={'d'+index} className="story_List">
          <ul className="no-bullets">
          <li key={'t'+index}><b>Title:</b> {item.title}</li>
          <li key={'a'+index}><b>Author:</b> {item.author}</li>
          <li key={'create'+index}><b>Date:</b> {item.created_at}</li>
          </ul>
          {/* <iframe src={item.url} title={item.title} width="500" height="200" key={"embed"+index}></iframe> */}
          <a href={item.url} target="_blank" rel="noreferrer" key={'a"+index'} >{item.url}</a>
          </div>
      })}
    </ul>
{console.log(props.data)}

</div>
)
}

export default Articles;