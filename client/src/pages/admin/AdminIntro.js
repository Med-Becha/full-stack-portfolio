import React from 'react'
import {Form, Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import {message} from 'antd'


function AdminIntro() {
    const dispatch = useDispatch()
    const {protfolioData} = useSelector((state)=> state.root)
    const onFinish = async (values) =>{
 
try {
    dispatch(ShowLoading())
    const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: protfolioData.Intro._id,
    })
    dispatch(HideLoading())
    if(response.data.success){
        message.success(response.data.message)
    }
} catch (error) {
    dispatch(HideLoading())
    message.error(error.message)
} }


  return (
    <div>

        <Form onFinish={onFinish} layout='vertical' initialValues={protfolioData?.Intro}>
            <Form.Item name="welcomeText" label='welcome text'>
                <Input placeholder='welcome text' />
            </Form.Item>
            <Form.Item name="firstName" label='first name'>
                <Input placeholder='firstName' />
            </Form.Item>
            <Form.Item name="lastName" label='LastName'>
                <Input placeholder='LastName' />
            </Form.Item>
            <Form.Item name="caption" label='caption'>
                <Input placeholder='Caption' />
            </Form.Item>
            <Form.Item name="description" label='description'>
                <textarea placeholder='Description' />
            </Form.Item>
       
        <div className="flex justify-end w-full" label='welcome text'>
            <button className='px-5 py-2 bg-primary text-white' type='submit'>save changes</button>
        </div>
        </Form>
    </div>
  )
}

export default AdminIntro