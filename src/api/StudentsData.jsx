import axios from 'axios';
import React, { useEffect, useState } from "react";
import ToggleButton from '../Components/ToggleButton';

function StudentsData() {
    // useState is React hook used to store all students fetched from API

    const [students, setStudents] = useState([]);

    //  Fetch all students data from API

    const getAllStudents = async () => {
        const url = await axios.get("https://68d6c247c2a1754b426bcfe8.mockapi.io/api/students");
        const response = url.data;
        setStudents(response) // Stores students in state

    }

    // useEffect is React hook  runs only once when the component mounts and shows the students data

    useEffect(() => {
        getAllStudents();
    }, []);


    //  Toggle attendance for a student
    const toggleAttendance = (student) => {
        student.isPresent = !student.isPresent;      // change the status
        setStudents([...students]);                  // update state
    };

    // Attendance function
    const submitAttendance = () => {
        const attendanceData = students.map(attendance => ({
            studentId: attendance.id, //studentId  stores the student’s unique id.
            isPresent: attendance.isPresent //isPresent  stores whether the student is marked present or absent.
        }));

        // Save to localStorage
        localStorage.setItem("students", JSON.stringify(students)); //JSON.stringify() converts a JavaScript object or array into a string because localStorage can only store strings

        console.log("Submitting attendance:", attendanceData);
        alert("Attendance submitted successfully!");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                {students.map((ele) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={ele.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <p className="card-text">{ele.Roll}</p>

                                {/* ToggleButton component  shows absent/ present*/}
                                <ToggleButton
                                    isOn={ele.isPresent}
                                    handleToggle={() => toggleAttendance(ele)}
                                    onLabel="Present"
                                    offLabel="Absent"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Attendance Submission Button */}
            <div className="mt-3 mb-2 text-center">
                <button className="btn btn-primary" onClick={submitAttendance}>
                    Submit Attendance
                </button>
            </div>
        </div>
    );
}
export default StudentsData;



