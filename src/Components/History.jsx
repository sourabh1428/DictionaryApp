import { Container } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import '../Assets/Resultant.css'
import { useNavigate } from 'react-router';


const History = () => {
    const selector=useSelector((state)=>state.history);
    const navigate = useNavigate();

    function getDetails(e){
        navigate(`/info/${e}`);
    }

    

  return (
    <Container>
        <ul className='res-ul' style={{listStyle:'none'}}> {selector.map((e,i)=>(<li key={i} onClick={()=>getDetails(e)} className='res-li'>
            {e}
        </li>))}</ul>
       

    </Container>
  )
}

export default History