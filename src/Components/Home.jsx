import React, { useState } from 'react'
import { Button, Container } from '@mui/material'
import '../Assets/Home.css';
import CircularProgress from '@mui/material/CircularProgress';
import Resultant from './Resultant';
import Meaning from './Meaning';
import add from '../Redux/Actions/reduxActionProvider';
import { useDispatch, useSelector } from 'react-redux';
import store from '../Redux/Store/Store';


const Home = () => {
  
const[text,setText]=useState('');  
const[data,setData]=useState([]);
const[flag,setFlag]=useState(false);
const[error,setError]=useState(false);
const[success,setSuccess]=useState(false);

const dispatch=useDispatch();


async function handleSearch(){
    try{
        const res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        console.log(res.status);
        if(res.status===404){
            setError(true);

            setSuccess(false);
        }
        else{
            setError(false);
            dispatch(add(text));
            setSuccess(true);
        }
        const result=await res.json();
    
    setData(result);
    setFlag(false);
    console.log(result);
    
    }
    catch(err){
        console.log(err);
        
        setFlag(false);
        
        
    }    
    
}




 
function handleChange(event){
    setText(event.target.value);
    setData([]);

}
function handleClick(){
    console.log(text);
   
    setFlag(true);
    
   
    handleSearch();
    setText('');
    
}
  
    return (
    <div>
        <Container   maxWidth="sm" className='container'>
        <input className='container-inp' type="text" placeholder='search..' onChange={handleChange} value={text} required/>
        {text===''?<Button disabled>Fill fields</Button>:<button className='container-btn' onClick={handleClick}>Search</button>}
        </Container>
   
           
            
        
        <Container  maxWidth="sm" className='container' > 
        {
                flag && (<CircularProgress/>)
            }

        {
                error && (<div><h1>{data.title}</h1><h2>{data.message}</h2><p>Resolution: {data.resolution}</p></div>)
            }
            
            {
                    success && data.length>0 && (<Meaning data={data}/>)
            }
            
            
            </Container>   
       
    
    </div>
  )
}

export default Home