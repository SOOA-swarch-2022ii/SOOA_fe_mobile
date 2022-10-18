import React, {useState, useEffect} from 'react';
import Header from "../../components/Header/Header";
import "./Home.css";
import {Sidebar, accessGlobalState, useGlobalState} from "../../components/SideBar/Sidebar";
import SelectOption from "../SelectOption";
import back from "../../assets/back.png";


const Home = ({handleLogged}) => {


    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
    });

    return(
        <div className="portal">
            <Header isLogged={handleLogged}/>
            <div className="main" style={{ backgroundImage: `url(${back})` }}>
            <form name="form">
            <div class="hamburguer-button" >
                <input type="checkbox" class="cbx" name="cbxName" onclick="aa()"/>  
                <nav style={{ backgroundImage: `url(${back})` }}>
                    <Sidebar />
                </nav>
                <div class="style-button">
                    <label for=""></label>
                    <label for=""></label>
                    <label for=""></label>
                </div>
                </div>
            </form>
                <div className="contenido">
                    <SelectOption/>
                </div>
            </div>
        </div>
    )
}

function Box() {
    return (
        <div>
            <h2>Box</h2>
        </div>
    );
}

function aa(){
  console.log(document.form.cbxName.checked);
}

export default Home;
