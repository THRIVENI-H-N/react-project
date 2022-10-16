import { Link } from "react-router-dom";
import Sandalfirst from "./Sandalfirst";
import Sandalsecond from "./Sandalsecond";
import {mainFood, mainSixth} from "./MockData";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import {useRef} from "react";

const Food = ()=>{
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
       <div>
         <span className="vertical">The</span>
            <h1 className="heading">Siren</h1>
             <p className="routes">
             <Link to = "/" className="one">Home</Link>
            <Link to = "/sandalwood"className="one">Sandalwood</Link>
            <Link to = "/music"className="one">Music</Link>
            <Link to = "/literature"className="one">Literature</Link>
            <Link to ="/crops" className="one">Crops</Link>
            <Link to="/food"className="one">Food</Link>
            <button className="btn nav-btn nav-close-btn" onClick={showNavbar}>
                <AiOutlineClose/>
            </button>
            </p>
            <button className="btn nav-btn" onClick={showNavbar}>
                <AiOutlineMenu/>
            </button>


            <hr className="hr1" />
            <div className="article">
            <p className="bolly">Food</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
    

            {
                mainFood.map((item4,index4)=>{
                    return(
                        <>
                        <Sandalfirst sandalhead={item4.sandalhead } sandaldesc={item4.sandaldesc} sandaltags={item4.sandaltags} sandalimg={item4.sandalimg}/>
                        </>
                    )
                })
            }


            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>

              
            </div>
            <div className="boxleftsandal">
               
                <div className="post">
                    <p className="sandaltoptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="food"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">KARNATAKA FULL MEALS</h3>
                    <span className="travel">food</span>
                    <span className="travel1">/ Octoner 2022</span>
                    </div>
                    <hr className="hr6" />

                    

                   {
                    mainSixth.map((item5,index5)=>{
                        return(
                            <>
                            <Sandalsecond secnum={item5.secnum } sectitle={item5.sectitle} sectags={item5.sectags} secimg={item5.secimg}/>
                            </>
                        )
                    })
                   }

                </div>
                <div className="advertisment">
                  <p className="advertisetext">Advertistement</p>
                </div>
            </div>
         
          </div>
       </div>
    )
}
export default Food;