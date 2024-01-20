import "./Post.css"
import poster from "./Rectangle 20.png"
import poster2 from "./Rectangle 18.png"
import {useEffect, useState} from "react";
function Post({services}) {
    const [data,dataSet]=useState()
    useEffect(() => {
        services.GetResource("api/blogs/blogposts/")
            .then(res=>{
                dataSet(res)
                console.log(res)
            })
    }, []);
    return (
        <div className={"Post"}>
            {data ?(
                    <div>
                        {data.map((res,index)=>{
                            return(
                                <div>
                                    { !(index % 2) ? (
                                        <div>
                                            <h1>{res.title}</h1>
                                            <div className={"post_block"}>
                                                <img src={res.blog_img} width={"370"} height={"370"}/>
                                                <p dangerouslySetInnerHTML={{__html: res.text}}></p>
                                            </div>
                                        </div>) :
                                        (
                                            <div>
                                                <h1>{res.title}</h1>
                                                <div className={"post_block"}>
                                                    <p dangerouslySetInnerHTML={{__html: res.text}}></p>
                                                    <img src={res.blog_img} width={"370"} height={"370"}/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })}

                    </div>):
                (<h1>loading...</h1>)}

        </div>
    )
}

export default Post