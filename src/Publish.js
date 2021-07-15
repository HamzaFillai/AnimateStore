import React from 'react'
import "./Publish.css"
export default function Publish() {

    var pub = document.getElementById("pub");
    const myToggel = ()=>{
        try{
            
            if(pub.innerHTML==="Unpublished")
            {
                pub.innerHTML="Publish"
            }
            else
            {
                pub.innerHTML="Unpublished"
            }
        }
        catch(err){}
    }

    return (
        <div>
            <div className="component2">
                <div className="dis">
                    <div className="published">
                    <label className="switch">
                        <input onClick={myToggel} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p id="pub">Unpublished</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
