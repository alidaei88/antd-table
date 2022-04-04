import React from 'react';
import './App.css';
import { useState } from 'react';
import { ConfigProvider, Space } from 'antd';
import { EditTwoTone, DeleteTwoTone, PlusCircleOutlined } from '@ant-design/icons'
import Header from './Components/Header';
import AddButton from './Components/AddButton'
import MyTable from './Components/MyTable/MyTable';
import MyModal from './Components/MyModal/MyModal';



function App() {

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true)
  }

  const showEditModal = () => {
    setIsEditModalVisible(true)
  }

  const showAddModal = () => {
    setIsAddModalVisible(true)
  }

  async function createPutRequest() {

    const options = {
      method: "PUT",
      body: JSON.stringify({
        title: "علی",
        body: "لورم اپیسوم",
        userId: 14,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', options);
      const data = await response.json();
      console.log('PUT data:', data)
    } catch (e) {
      console.log(e)
    }
  }

  async function createGetRequest() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      console.log('GET data:', data)
    } catch (e) {
      console.log(e)
    }
  }

  async function createPostRequest() {
    const options = {
      method: "POST",
      body: JSON.stringify({
        title: "علی",
        body: "لورم اپیسوم",
        userId: 14,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", options)
      const data = await response.json()
      console.log('POST data:', data)
    } catch (e) {
      console.log(e)
    }
  }

  

  async function createDeleteRequest() {
    const options = {
      method: "DELETE",
      body: JSON.stringify({
        title: "علی",
        body: "لورم اپیسوم",
        userId: 14,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', options);
      const data = await response.json();
      console.log('DELETE data:', data)
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteOk = () => {
    createDeleteRequest()
    createGetRequest()
    setIsDeleteModalVisible(false);
  }

  const handleEditOk = () => {
    createPutRequest()
    createGetRequest()
    setIsEditModalVisible(false);
  }

  const handleAddOk = () => {
    createPostRequest()
    createGetRequest()
    setIsAddModalVisible(false);
  }

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
  }

  const handleEditCancel = () => {

    setIsEditModalVisible(false)

  }

  const handleAddCancel = () => {
    setIsAddModalVisible(false)

  }

  const tableColumns = [
    {
      title: 'شناسه',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'شناسه کاربر',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'عنوان',
      dataIndex: 'headding',
      key: 'headding',
    },
    {
      title: 'متن',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'عملیات',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <EditTwoTone className='editBtn' onClick={showEditModal} />
          <DeleteTwoTone className='deleteBtn' onClick={showDeleteModal} />
        </Space>
      ),

    }
  ];

  const data = [
    {
      key: '1',
      id: '11',
      name: 'علی',
      headding: 'لورم ایپسوم',
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      actions: ''

    },
    {
      key: '2',
      id: '12',
      name: 'علی',
      headding: 'لورم ایپسوم',
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
    },
    {
      key: '3',
      id: '13',
      name: 'علی',
      headding: 'لورم ایپسوم',
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
    },
  ];

  return (

    <ConfigProvider direction='rtl'>
      <div className="App">
        <Header />
        <AddButton onClick={showAddModal}>
          <span>جدید</span>
          <PlusCircleOutlined />
        </AddButton>
        <MyModal title={" اضافه کردن ردیف جدید"} isModalVisible={isAddModalVisible} handleOk={handleAddOk} handleCancel={handleAddCancel} >
          <div className='add-modal'>
            <div className='edit-input'>
              <label htmlFor='edit-name'>کاربر </label>
              <input type='text' id='edit-name' />
            </div>
            <div className='header-input'>
              <label htmlFor='edit-header'>عنوان</label>
              <input type='text' id='edit-header' />
            </div>
            <div className='text-input'>
              <label htmlFor='edit-text'>متن</label>
              <textarea type='text' id='edit-text' />
            </div>
          </div>
        </MyModal>
        <MyTable columns={tableColumns} data={data} />
        <MyModal title={"حذف ردیف"} className='delete-modal' isModalVisible={isDeleteModalVisible} handleOk={handleDeleteOk} handleCancel={handleCancel} >
          <p>آیا مطمئن هستید؟</p>
        </MyModal>
        <MyModal title={"ویرایش ردیف"} className='edit-modal' isModalVisible={isEditModalVisible} handleOk={handleEditOk} handleCancel={handleEditCancel} >
          <div className='edit-modal'>
            <div className='edit-input'>
              <label htmlFor='edit-name'>کاربر</label>
              <input type='text' id='edit-name' />
            </div>
            <div className='header-input'>
              <label htmlFor='edit-header'>عنوان</label>
              <input type='text' id='edit-header' />
            </div>
            <div className='text-input'>
              <label htmlFor='edit-text'>متن</label>
              <textarea type='text' id='edit-text' />
            </div>
          </div>

        </MyModal>
      </div>
    </ConfigProvider>

  );
}

export default App;
