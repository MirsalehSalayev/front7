import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Helmet} from "react-helmet-async"
import "./add.scss"
import * as Yup from 'yup';
function Add() {
  const [data, setData] = useState([])
  const FetchData = async () => {
    const response = await fetch("http://localhost:3100/services")
    const api = await response.json()
    setData(api)
  }
  useEffect(() => {
    FetchData()
  }, [])
  async function Delete(id) {
    await fetch("http://localhost:3100/services/" + id, {
      method: "DELETE",

    });
    await FetchData()
  }
  async function AddDataFormik(item) {
    await fetch("http://localhost:3100/services", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    await FetchData()
  }
  return (<>
    <Helmet>
      <title>add</title>
    </Helmet>
    <Formik
      initialValues={{ name: '', title: '', image: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        title: Yup.string()
          .required('Required'),
        image: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          AddDataFormik(values)
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="name">First Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="title">Last Name</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="image">image Address</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    <table>
      <thead>
        <tr>

          <th>Name</th>
          <th>title</th>
          <th>image</th>

        </tr>
      </thead>
      <tbody>{data.map((item) => (

        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.title}</td>
          <td>
            <img src={item.image} alt="" />
          </td>
          <td><button onClick={() => Delete(item._id)}>delete</button></td>
        </tr>
      ))}
      </tbody>

    </table>
  </>
  )
}

export default Add