import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function Table(){
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchdata=async ()=>{
            const res=await fetch('https://fakestoreapi.com/users');
            console.log(res);
            //console.log(res.data);  //for axios
            //console.log(await res.json());
            const resData=await res.json();
            //const resData=await res.data();  //for axios
            setData(resData);
            console.log(data);
        }
        fetchdata();
    })
    return(
        <>
        <div>
        <button type="button" onClick={() => navigate('/')}>Logout</button>
        <table >
            <thead>
                <tr style={{border:'2px solid black'}}>
                    <th style={{border:'2px solid black'}}>id</th>
                    <th style={{border:'2px solid black'}}>email</th>
                    <th style={{border:'2px solid black'}}>username</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>
                    <tr key={index}>
                        <td style={{border:'2px solid black',padding:'10px'}}>{item.id}</td>
                        <td style={{border:'2px solid black'}}>{item.email}</td>
                        <td style={{border:'2px solid black'}}>{item.username}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>    
        </div>
        </>
    )
} 
export default Table;