import React from 'react';
import NoteCard from './NoteCard';
import "./CardList.css";

export default function CardList({robots}) {

    return (
        <div className='Content'>
            {
                robots.map((robot,index) => {
                    return <NoteCard id={robot.id} name={robot.name} email={robot.email}/>
                })
            }
        </div>
    )
}