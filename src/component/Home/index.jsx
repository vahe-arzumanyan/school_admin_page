import React from "react";
import './style.scss'
import {Route, Routes} from "react-router-dom";
import School from "../../pages/school";
import Teacher from "../../pages/teachers";
import Pupil from "../../pages/pupils";


const Home = () => {
    return <div className='P-top-ui G-flex G-center'>
        <div className='P-school-admin-title'>
            <p>Schools administration</p>
        </div>
            <Routes>
                <Route path={"/School"} element={<School/>} />
                <Route path={"/Teachers"} element={<Teacher/>} />
                <Route path={"/Pupil"} element={<Pupil/>} />
                {/*<Route path= {'/Home'} element={<School/>}/>*/}
            </Routes>

    </div>

}

export default Home;