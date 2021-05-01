import React from 'react';
import '../Success.css'
import {Link} from "react-router-dom";
import {Button} from "../Button";

export default function Success() {
    return (
        <>
            <div>

                <h2>
                    Registration successful !
                    Please sign in <Link className="success" to="/login"> HERE </Link>

                </h2>


            </div>
        </>
    )
}