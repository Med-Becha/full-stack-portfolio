import  React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";


function AdminEducation() {
  const dispatch = useDispatch();
  const { protfolioData } = useSelector((state) => state.root);
  const { Education } = protfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");
const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
       
      
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-Education", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-Education", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
        form.resetFields()
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-Education", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Education
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {Education.map((education, index) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col" key={index}>
            <h1 className="text-primary text-xl font-bold">
              {education.title}
            </h1>
            <hr />
            <img src={education.Image} alt="" className="h-60 w-80 rounded" />
            
            <h1>{education.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(education);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                    setSelectedItemForEdit(education);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Education" : "Add Education"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
          form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="title" label="title">
              <input placeholder="title" />
            </Form.Item>
            <Form.Item name="Image" label="Image">
              <input placeholder="Image" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="link" label="link">
              <textarea placeholder="link" />
            </Form.Item>

            

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminEducation;