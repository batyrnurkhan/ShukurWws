const token=localStorage.getItem("token")
class Services{
    GetResource=async (url="")=>{
        let res
        if (token !== "undefined" && token !== null && token!== "" ){
            res=await fetch(`http://127.0.0.1:8000/${url}`, {
                headers: {
                    Authorization: `Token ${token}`
                },
                //credentials:"include"
            })}
        else {
            res=await fetch(`http://127.0.0.1:8000/${url}`)
        }
        if (!res.ok){
            throw new Error("чел пиши нормально")
        }
        return await res.json();
    }
}
export default Services