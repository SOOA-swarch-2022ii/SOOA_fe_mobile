import {Sidebar, accessGlobalState, useGlobalState} from "../components/SideBar/Sidebar";
import Welcome from "./Welcome/Welcome";
import Profile from "./Profile/Profile";
import AcademicRecord from "./AcademicRecord/AcademicRecord";

const SelectOption = () => {
    const state = useGlobalState();
    if (state.get() === 'per'){
        return <h1><Profile/></h1>;
    } else if (state.get() === 'ini'){
        return (<Welcome/>);
    } else if (state.get() === 'reg'){
        return <h1>Consultar notas</h1>;
    } else if (state.get() === 'his'){
        return <h1><AcademicRecord/></h1>;
    } else if (state.get() === 'bus'){
        return <h1>Buscador de cursos</h1>;
    }else if (state.get() === 'bus'){
        return <h1>Carreras</h1>;
    }

}

export default SelectOption;