import React, { useState, useEffect } from "react";
import AttendanceChart from "../Components/AttendanceChart";

const AttendanceSummary = () => {
  // useState is react hook used to store summary data for chart
  const [summaryData, setSummaryData] = useState([]);
  // useEffect runs when the component mounts
  useEffect(() => {
    // Create Mock data 
    const data = [
      { className: "Class 1", attendance: 85 },
      { className: "Class 2", attendance: 90 },
      { className: "Class 3", attendance: 78 },
      { className: "Class 4", attendance: 95 },
    ];
    setSummaryData(data);
  }, []);  // Empty dependency array means this runs only once on component mount

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Attendance Summary</h2>

      {/* Render the AttendanceChart component and pass summaryData as a prop */}
      <AttendanceChart data={summaryData} />

      {/* Display summary cards below the chart */}
      <div className="row mt-4">
        {summaryData.map((cls, idx) => (
          <div className="col-6 col-md-3 mb-3" key={idx}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{cls.className}</h5>
                {/* Display attendance percentage */}

                <p className="card-text">{cls.attendance}% Attendance</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceSummary;
