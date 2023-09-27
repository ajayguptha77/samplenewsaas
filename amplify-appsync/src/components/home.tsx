import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ContextData from './useContext';

function Home() {

    
  return (

    <div className='container p-4'>
            <h3>Learning Management System : </h3>
            <p>
                LMS is a popular online learning platform that offers a wide range of courses in various fields, including business, technology, arts and humanities, health and fitness, and more. The courses on LMS are created and taught by experts in their respective fields, and are designed to be accessible to learners of all levels, from beginners to advanced.

                LMS courses are typically delivered in video format, and can be accessed on demand from anywhere with an internet connection. Many courses to help learners reinforce their knowledge and skills.

                LMS also provides tools and resources for instructors to create and publish their own courses on the platform, allowing anyone with expertise in a particular field to share their knowledge and skills with a global audience.
            </p>
    </div>
       
    );
}

export default Home;
