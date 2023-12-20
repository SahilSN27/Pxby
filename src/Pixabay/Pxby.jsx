import { useEffect,useState } from "react";
import Navbar from  "./Navbar.jsx";

const App = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [image, setImage] = useState(false);
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=41083244-d8408a8aeee930652994985d9&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then(d=>setData(d.hits))
        
    })
    
    var main=document.getElementById('main')
    var box1=document.getElementById('box1')
    function zoomin() {
        box1.style.display='flex';
        main.style.opacity='0.5'
    }
    function zoomout() {
        box1.style.display='none';
        main.style.opacity='1'
    }
    
    

    return(
        <section id="sec">
          <Navbar/>
            <div id="box1" className="fixed h-[100vh] w-full justify-center items-center flex-wrap flex-col z-30  hidden bg-transparent opacity-100 ">
                <div onClick={zoomout} className="cursor-pointer text-3xl text-violet-800 w-auto flex justify-end z-50"><i class="fa-regular fa-circle-xmark"></i></div>    
                <div className="z-50"><img id="Img" src={image} alt="" /> </div>
            </div>
            <div id="main" className="z-0">
                {/* <div className="my-5 flex justify-center items-center ">
                    <input className="border-2 border-black w-80 h-10" type="search" placeholder="Search Pic's" onChange={(e)=>setSearch(e.target.value)} />
                </div> */}

                <div className="h-auto w-auto justify-around items-center grid grid-cols-2 sm:grid-cols-5 gap-10">
                    { data.map((x) => {
                            return(
                                <div key={x.id} id="box" onClick={()=>setImage(x.webformatURL)} className="h-auto w-auto cursor-pointer">
                                    <img onClick={zoomin} src={x.webformatURL} height={x.webformatWidth} width={x.webformatHeight} alt="" />
                                </div>
                            )
                        }
                    ) }
                    
                </div>
            </div>
            
        </section>
    )
}
export default App