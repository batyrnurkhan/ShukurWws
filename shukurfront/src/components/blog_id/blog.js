import poster from "../post/Rectangle 20.png";
import poster2 from "../post/Rectangle 18.png";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Post({services}){
    const { id } = useParams();
    const [data,dataSet]=useState()
    useEffect(() => {
        services.GetResource(`/api/blogs/blogposts/${id}`)
            .then(res=>{
                console.log(res)
                dataSet(res)
            })
    }, []);
    return(
        <div>
        {data ?(<div className={"Post"}>
                <h1>{data.title}</h1>
                <div className={"post_block1"} dangerouslySetInnerHTML={{ __html: data.text }}>

                </div>
            </div>):
        (<h1>loadfing...</h1>)}
    </div>
    )
}
export default Post