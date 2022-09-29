import React from 'react'
import {Form, Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import {message} from 'antd'


function AdiminContact() {
    const dispatch = useDispatch()
    const {protfolioData} = useSelector((state)=> state.root)
    const onFinish = async (values) =>{
 
try {
    dispatch(ShowLoading())
    const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: protfolioData.Contact._id,
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

        <Form onFinish={onFinish} layout='vertical' initialValues={protfolioData.Contact}>
            <Form.Item name="name" label=' name'>
                <Input placeholder='Name' />
            </Form.Item>
            <Form.Item name="gender" label='gender'>
                <Input placeholder='gender' />
            </Form.Item>
            <Form.Item name="age" label='age'>
                <Input placeholder='age' />
            </Form.Item>
            <Form.Item name="contry" label='contry'>
                <Input placeholder='contry' />
            </Form.Item>
            <Form.Item name="email" label='email'>
                <Input placeholder='email' />
            </Form.Item>
            <Form.Item name="mobile" label='mobile'>
                <Input placeholder='mobile' />
            </Form.Item>
       
        <div className="flex justify-end w-full" label='welcome text'>
            <button className='px-5 py-2 bg-primary text-white' type='submit'>save changes</button>
        </div>
        </Form>
    </div>
  )
}

export default AdiminContact