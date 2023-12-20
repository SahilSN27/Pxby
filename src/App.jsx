import React, { useEffect, useState } from 'react'
import './Pixabay/Pxby.css'


const App = () => {

    const [data,setData]= useState([])
    const [search,setSearch] = useState("")
    const [imgpath,setImgpath] = useState()
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=41083293-176477c31f3ef391eab96230d&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then((d)=>setData(d.hits))
    })



  return (
    <section>
        <main>
        <header>
            <div className="left"><h1>pixabay</h1></div>
            <div className="right">
                <button>Explore</button><button>Log in</button><button>Join</button>
                <button id='upload'>Upload</button>
            </div>
        </header>
        <div className="center">
        <div>
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <br />
        <p>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</p>
        <br />
        <input type="search" placeholder='Search Image' className='border-2 border-black text-black' onChange={(e)=>setSearch(e.target.value)} />
        </div>
        </div>
        </main>
        <br />
    <div className='flex flex-wrap justify-around' id='main'>
        {data.map((x)=>{
            return(
                <div key={x.id} onClick={()=>{setImgpath(x.webformatURL)}}>
                <img  src={x.webformatURL} alt="" height={x.webformatHeight} width={x.webformatWidth}/>
                </div>
            )
        })
        }
    </div>
    <div className="pop-image" style={{display:imgpath?'block':'none'}}>
    <span onClick={()=>setImgpath(null)}>❌</span>
        {
            <img src={imgpath} alt="" />
        }
    </div>
    </section>
  )
}

export default App