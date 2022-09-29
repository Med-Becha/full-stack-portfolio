import React from 'react'
import {Form, Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'
import {message} from 'antd'


function AdminAbout() {
    const dispatch = useDispatch()
    const {protfolioData} = useSelector((state)=> state.root)
    const onFinish = async (values) =>{
 
try {
  const tempSkills = values.skills.split(",")
  values.skills= tempSkills
  dispatch(ShowLoading())
    const response = await axios.post("/api/portfolio/update-About", {
        ...values,
        _id: protfolioData.About._id,
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

        <Form onFinish={onFinish} layout='vertical' initialValues={{...protfolioData.About, skills: protfolioData.About.skills.join(",")} }>
            <Form.Item name="lottieURL" label='Lottie URL'>
                <Input placeholder='Lottie URL' />
            </Form.Item>
        
            <Form.Item name="description1" label='description1'>
                <textarea placeholder='description1' />
            </Form.Item>
            <Form.Item name="description2" label='description2'>
                <textarea placeholder='description2' />
            </Form.Item>
            <Form.Item name="skills" label='skills'>
                <textarea placeholder='skills' />
            </Form.Item>
       
       
        <div className="flex justify-end w-full" label='welcome text'>
            <button className='px-5 py-2 bg-primary text-white' type='submit'>save changes</button>
        </div>
        </Form>
    </div>
  )
}

export default AdminAbout