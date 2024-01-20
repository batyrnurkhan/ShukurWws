import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Activate_email() {
    const {uid,token}=useParams()
    const [triger,trigerSet]=useState(false)
    useEffect(()=>{

            fetch("http://127.0.0.1:8000/auth/users/activation/",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    uid:uid,
                    token:token
                })

            })
                .then(data=>{
                    if(data.status !== 304){
                        console.log("eror")
                    }
                    else {
                        trigerSet(true)
                    }
                })


    },[])
    return(
        <div>
            {triger?(<h1>EROR</h1>):(<h1>ok</h1>)}
        </div>
    )
}

export default Activate_email