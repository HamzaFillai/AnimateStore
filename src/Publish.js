import React from 'react'
import "./Publish.css"

export default function Publish() {
    var pubb = "";
    const myToggel = ()=>{
            if(document.getElementById("pub").innerHTML==="Unpublished")
            {
                document.getElementById("pub").innerHTML="Published"
                pubb = document.getElementById("pub").innerHTML;
            }
            else
            {
                document.getElementById("pub").innerHTML="Unpublished"
                pubb = document.getElementById("pub").innerHTML;
            }
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