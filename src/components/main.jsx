import { useState ,createRef} from "react";
import { createFileName,useScreenshot } from "use-react-screenshot";
import magne from '../assets/magne.jpg';
import khadka from '../assets/kadka.jpg';
import apsara from '../assets/apsara.jpg';
import mikala from '../assets/mikala.jpg';

const data=[
    {   
        id:1,
        imageUrl:mikala
    },
    {
        id:2,
        imageUrl:apsara
    },
    {
        id:3,
        imageUrl:khadka
    },
    {
        id:4,
        imageUrl:magne
    },
]

function Main() {
const [selectedCard,setSelectedCard]=useState()
const [topText,setTop]=useState('')
const  [bottText,setBott]=useState('')

const ref=createRef(null)

const [image,takeScreenshot]=useScreenshot({
    type:'image/png',
    quality:1.0
})

const handleCard=(m)=>{
    setSelectedCard(m)
    console.log(m);
}

const handdleTopInput=(ev)=>{
    setTop(ev.target.value)
}
const handleBottomInput=(ev)=>{
    setBott(ev.target.value)
}

const download=(image,{name='img',extension='png'}={})=>{
const a=document.createElement('a')
a.href=image
a.download=createFileName(extension,name)
a.click()
}

const screenshot=()=>{
    takeScreenshot(ref.current).then(download)


}

    return ( <section className="main">
        <div className="input">
            <input 
            type="text"
            placeholder="Top Text"
            onChange={handdleTopInput} />
            <input  
            type="text" 
            placeholder="Bottom Text" 
            onChange={handleBottomInput}/>
        </div>

        <div className="generatebutton">
             <button className='button' onClick={screenshot}type="submit">Generate meme.
        </button>
        </div>

        <div     className="memeContainer">
            {
                selectedCard ?
                <div ref={ref}  className="memeItem">
                   
                    <img  src={selectedCard.imageUrl} alt="" crossOrigin="anonymous"/>
                    <div className="topText">
                         {topText}
                    </div>
                    <div className="bottomText">
                        {bottText}
                    </div>
                </div>
                
                :
                <div ref={ref} className="memeItem">
                    
                    <img src={data[1].imageUrl} alt="" crossOrigin="anonymous"/>
                    <div className="topText">
                        {topText}
                    </div>
                    <div className="bottomText">
                        {bottText}
                    </div>
                </div>
                
            }
        </div>
       <hr />
      <h1 className="memeCollectionHeading">Potential meme</h1>
        <div className="meme-collection">
            

            {
                data.map(meme=>(
                    <img key={meme.id} className='meme' src={meme.imageUrl} alt="" onClick={()=>handleCard(meme)}/>
                ))
            }
            
        </div>
        

    </section> );
}

export default Main;