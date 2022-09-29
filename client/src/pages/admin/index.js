import React, { useEffect } from 'react'
import Header from '../../components/Header'
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminExperiences from './AdminExperiences';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects';
import AdminEducation from './AdminEducation';
import AdiminContact from './AdminContact';
const { TabPane } = Tabs;


const Admin = () => {

useEffect (()=>{
    if(!localStorage.getItem("token")){
        window.location.href = "/admin-login"
    }
}, [] )

    const {protfolioData } =useSelector((state)=> state.root)
    return (
        <div >
            <Header />
        <div className='flex gap-10 items-center px-5 py-2 justify-between'>
            <div className='flex gap-10 items-center'>
                <h1 className='text-3xl text-primary'>portfolio admin</h1>
                <div className='underline text-primary'></div>
            </div>
            <h1 className='underline text-primary text-xl cursor-pointer' onClick={()=>{
                localStorage.removeItem('token');
                window.location.href= "/admin-login"
            }}>logout</h1>
        </div>

        {protfolioData &&     <div className='mt-5 p-5'>
                <Tabs defaultActiveKey="1"  >
                    <TabPane tab="Intro " key="1">
                        <AdminIntro/>
                    </TabPane>
                    <TabPane tab="about" key="2">
                       <AdminAbout/>
                    </TabPane>
                    <TabPane tab="Experiences" key="3">
                       <AdminExperiences/>
                    </TabPane>
                    <TabPane tab="Projects" key="4">
                       <AdminProjects/>
                    </TabPane>
                    <TabPane tab="Education" key="5">
                       <AdminEducation/>
                    </TabPane>
                    <TabPane tab="Contact" key="6">
                       <AdiminContact/>
                    </TabPane>
                </Tabs>
            </div>}

        </div>
    )
}

export default Admin