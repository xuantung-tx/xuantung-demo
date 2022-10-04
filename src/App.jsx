import './App.css'
import React from 'react'
import Modal from './mod/Modal'
import Cart from './mod/Cart'

import { useState, useEffect } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  const [index, setIndex] = useState()
  const [count, setCount] = useState([0, 0])

  data.map((value, index) => { value.id = index })
  let listtodo = data.filter(value => value.status == 1)
  let listdoing = data.filter(value => value.status == 2)
  let listdone = data.filter(value => value.status == 3)


  const openmodal = () => {
    document.querySelector('#name').value = ''
    document.querySelector('#date').value = ''
    let arrst = document.querySelectorAll('#radio')
    for (let i = 0; i < arrst.length; i++) {
      arrst[i].checked = false
    }
    setToggle(false)
  }

  useEffect(() => {
    setCount([listtodo.length + listdoing.length, listdone.length])
  }, [data])
  return (
    <div className='tung'>
      <button type="button" onClick={openmodal} className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <Modal index={index} toggle={toggle} setData={setData} data={data}></Modal>
      <div className="text-primary" role="status">
        <span className="visually-hidden">...</span>
      </div> {count[0]} <br />
      <div className=" text-danger" role="status">
        <span className="visually-hidden">...</span>
      </div> {count[1]}
      <div className="list">
        <div className="todos"><p className="title">Todo <span>{listtodo.length}</span></p>
          {listtodo.map((value, index) => {
            return (<div key={index}><Cart setIndex={setIndex} setToggle={setToggle} id={value.id} data={data} status={value.status} setData={setData} name={value.name} date={value.date}></Cart></div>)
          })}
        </div>
        <div className="todos"><p className="title">Doing <span>{listdoing.length}</span></p>
          {listdoing.map((value, index) => {
            return (<div key={index}><Cart setIndex={setIndex} setToggle={setToggle} id={value.id} data={data} status={value.status} setData={setData} name={value.name} date={value.date}></Cart></div>)
          })}
        </div>
        <div className="todos"><p className="title">Done <span>{listdone.length}</span></p>
          {listdone.map((value, index) => {
            return (<div key={index}><Cart setIndex={setIndex} setToggle={setToggle} id={value.id} data={data} status={value.status} setData={setData} name={value.name} date={value.date}></Cart></div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default App