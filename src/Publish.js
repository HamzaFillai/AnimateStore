import React from 'react'
import "./Publish.css"
export default function Publish() {
    return (
        <div>
            <div className="component2">
                <div className="dis">
                    <div className="published">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p>Unpublished</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
