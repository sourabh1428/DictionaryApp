import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Player from './Player';
import '../Assets/Resultant.css'
import { useParams } from 'react-router';



let res= {
    "word": "data",
    "phonetic": "/ˈdaetə/",
    "phonetics": [
        {
            "text": "/ˈdaetə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-au-nz.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=35316551",
            "license": {
                "name": "BY-SA 4.0",
                "url": "https://creativecommons.org/licenses/by-sa/4.0"
            }
        },
        {
            "text": "/ˈdætə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-ca-ie-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=197143",
            "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
        },
        {
            "text": "/ˈdeɪtə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-ie-uk-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=197144",
            "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
        },
        {
            "text": "/ˈdaetə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-au-nz.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=35316551",
            "license": {
                "name": "BY-SA 4.0",
                "url": "https://creativecommons.org/licenses/by-sa/4.0"
            }
        },
        {
            "text": "/ˈdeɪtə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-ie-uk-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=197144",
            "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
        },
        {
            "text": "/ˈdeɪtə/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/data-ie-uk-us.mp3",
            "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=197144",
            "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
            }
        }
    ],
    "meanings": [
        {
            "partOfSpeech": "noun",
            "definitions": [
                {
                    "definition": "(plural: data) A measurement of something on a scale understood by both the recorder (a person or device) and the reader (another person or device). The scale is arbitrarily defined, such as from 1 to 10 by ones, 1 to 100 by 0.1, or simply true or false, on or off, yes, no, or maybe, etc.",
                    "synonyms": [],
                    "antonyms": []
                },
                {
                    "definition": "(plural: data) A fact known from direct observation.",
                    "synonyms": [],
                    "antonyms": []
                },
                {
                    "definition": "(plural: data) A premise from which conclusions are drawn.",
                    "synonyms": [],
                    "antonyms": []
                },
                {
                    "definition": "(plural: datums) A fixed reference point, or a coordinate system.",
                    "synonyms": [],
                    "antonyms": []
                }
            ],
            "synonyms": [],
            "antonyms": []
        }
    ],
    "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
        "https://en.wiktionary.org/wiki/data",
        "https://en.wiktionary.org/wiki/datum"
    ]
};

const NewBookPage = () => {
    const [res,setRes]=useState();
    const{bookName}=useParams();
    useEffect(()=>{
      async function getBooks(){
        const res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${bookName}`);
        const response=await  res.json();
        setRes(response[0]);
    }
        if(bookName){
            getBooks();
    }

    },[]);
  return (
     <Container>
        {(res ) && (
            <div>
    <h1>{res.word}</h1>
    <ul className='res-ul' style={{ listStyle: 'none' }}>
      {res.phonetics.map((e, i) => (
        <li className='res-li' key={i}>
          {e.text}
          <Player url={e.audio} />
        </li>
      ))}
    </ul>

    <div>
      {res.meanings.map((meaning, index) => (
        <div key={index}>
          <h1>{meaning.partOfSpeech}</h1>
            {/* //antonyms
            //synonyms
            //definitions[{definition:xyz,}] */}
            {meaning.antonyms.length>0 && <ul><h4>Antonyms</h4> {meaning.antonyms.map((e)=>(<li>{e}</li>)) }</ul>}
            {meaning.synonyms.length>0 && <ul> <h4>Synonyms</h4> {meaning.synonyms.map((e)=>(<li>{e}</li>))}</ul> }
            {meaning.definitions.length>0 &&(<ul style={{listStyle:'dotted'}} ><h4>Definitions</h4>{meaning.definitions.map((e)=>(<li>{e.definition}</li>))}</ul>)}
          <ul className='res-ul' style={{listStyle:'none'}}>
            {meaning.definitions.map((definition, idx) => (
              <li className='res-li' key={idx}>{definition.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>)}
  </Container>
  )
}

export default NewBookPage;