import React from 'react'
import './Header.css'
import LangSelector from './LangSelector'
import { useSelector } from 'react-redux'
import logo from "../assets/logo.jpg"

export default function () {

    const lang = useSelector(state => state.lang);

    return (
        <div className='header'>
            <img src={logo} />
            {lang === "EN" ? (
                <h2>Start typing to find the word !</h2>
            ) : (
                <h2>Écrivez pour trouver le mot !</h2>
            )}
            <LangSelector />
        </div>
    )
}
