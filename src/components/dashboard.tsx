import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContextData from './useContext';
import BarGraph from './barGraph';

function Dashboard() {

    const location = useLocation();
    const navigate = useNavigate();
    const { data } = useContext<any>(ContextData);
    console.log("data",data)

  return (
    <div className='container-fluid' style={{}}>
        <div className='row col-md-12 text-center'>
            <div className='container-fluid' style={{ marginTop : "5%",position: "absolute",top: "0",bottom: "0" }}>
            
                {data?.details ? 
                    <h2 className='pt-5'>Welcome to LMS, {data?.details?.username}</h2>
                : null }

                {data?.details?.role === "MA" ?
                <div className='row col-md-12'>
                <div className='col-md-1'></div>
                    <div className='col-md-4 p-3 bg-body rounded m-5' id="Block" style={{cursor: "pointer", boxShadow:"10px 10px 5px #b3e6ff"}} onClick={() => { navigate("/addCourse") }}>
                        <p>Create a Course</p>
                    </div>
                    <div className='col-md-4 p-3 bg-body rounded m-5' style={{cursor: "pointer", boxShadow:"10px 10px 5px #b3e6ff"}} onClick={() => { navigate("/welcome") }}>
                        <p>Go to dashboard and explore all features</p>
                    </div>
                </div>
                
                :
                <div className='row col-md-12 mt-5'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <BarGraph id = { location?.state?.Data ? location?.state?.Data :data } /> 
                    </div>
                </div>
                
                }

            </div>
        </div>
        </div>
    );
}

export default Dashboard;
