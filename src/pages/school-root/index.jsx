import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import School from '../../store/school-reducer/index'
import Teacher from '../../store/school-reducer/index'
import Pupil from '../../store/school-reducer/index'

const SchoolRoot = () => {
    const schoolList = useSelector(state=>state.School.schoolList)
    const teacher = useSelector(state=>state.Teacher.teacherList)
    const pupil = useSelector(state=>state.Pupil.pupilList)
    const {id}=useParams
}

const [schoolRoot, setSchoolRoot]= useState({
    schoolName:'',
    schoolDirector:'',
    schoolAddress:'',
    schoolContact:'',
    schoolEmail:'',
    schoolTeacherCount:0,
    schoolPupilCount:0,
    teacherList:[],
    pupilList:[]
})

useEffect(()=>{
   console.log(schoolList);
}, [])

return<>

</>
export default SchoolRoot;