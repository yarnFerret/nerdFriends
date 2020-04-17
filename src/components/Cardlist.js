import React from "react";
import Card from './Card';
import './Cardlist.css';

const CardList = ({ cats }) =>{
	return (
    <div className='lista'>
    	{cats.map((user, i) => {
				return (<Card key={i} id={cats[i].id} name={cats[i].name} ksywa={cats[i].username} />)
    		})  
			}
    </div>
  );
}

export default CardList;