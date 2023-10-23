import React ,{useState , useEffect} from 'react'

function PassContainer() {
    const [length , setLength]=useState(8);
    const [password , setPassword]=useState("");
    const [number , setNumber]=useState(false);
    const [character , setCharacter]=useState(false);
    useEffect(()=>{
        let pass="";
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        if(number) 
          str +="0123456789";
        if(character)
        str +=",<.>;:'"+"/?[{()}]"+'"' +"'";
    for(let i=1;i<=length;i++){
        pass += str.charAt(Math.floor(Math.random()*str.length));
    }
    setPassword(pass);

    } ,
    [length , number , character ]);
    
    
    return (
        <>
                <div className="container" style={{ border: '4px solid white',width:'60vw' , minWidth: '290px', minHeight: '40vh', padding: '20px', color: '#5c4b1a' }}>
                <div className="container text-center my-4"><h3>Password generator</h3></div>
                <div className="mb-3 d-flex">
                    <input type="text" className="form-control mx-2" value={password}  readOnly id="exampleInputPassword1" />
                    <button type="button" className="btn btn-outline-primary mx-2">Copy</button>
                </div>
                <div className="container d-flex">
                <input type="range" className="form-range" min={5} max={20} value={length} id="customRange1" onChange={(e)=>{setLength(e.target.value)}}/>
                <div className="container">Length:({length})</div>
                <div className="container "><input className="form-check-input mx-2 " style={{cursor:'pointer'}} type="checkbox" onChange={()=>{setNumber(!number)}}id="flexCheckDefault"/>Numbers </div>
                <div className="container "><input className="form-check-input mx-2" style={{cursor:'pointer'}} type="checkbox" onChange={()=>{setCharacter(!character)}} id="flexCheckDefault"/>Characters </div>

                </div>



            </div>
        </>
    );
}

export default PassContainer;
