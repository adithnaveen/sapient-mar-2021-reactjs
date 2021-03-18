import React from 'react'

const EmployeeCard = ({ emp }) => {

    return (
        <div className="card" style={{ width: "400px", height: "130px", padding: "10px", margin: "5px" }}>
            <div className="row">
                <div className="col-md-4">
                    <img src={emp.picture} alt={emp.name}
                        style={{ height: "100px", width: "100px" }} className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{emp.gender === "male" ? "Mr. " : "Ms/Mrs: "}{emp.name}</h4>
                        <div className="card-text">{emp.email}</div>
                        <div className="card-text">{emp.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EmployeeCard;