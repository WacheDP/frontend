import React, { useEffect, useRef, useState } from 'react'
import {
  CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAt, cilCalendar, cilHeart, cilLocationPin, cilLockLocked, cilPhone, cilUser } from '@coreui/icons'
import 'src/css/backgrounds.css'

/*
-- Table: public.employees
-- DROP TABLE IF EXISTS public.employees;
CREATE TABLE IF NOT EXISTS public.employees
(
    id character varying(36) COLLATE pg_catalog."default" NOT NULL DEFAULT uuid_generate_v4(),
    ci character varying(15) COLLATE pg_catalog."default" NOT NULL,
    rif character varying(15) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    middle_name character varying(15) COLLATE pg_catalog."default",
    last_name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    surname character varying(15) COLLATE pg_catalog."default",
    address character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(20) COLLATE pg_catalog."default",
    birth_date date NOT NULL,
    start_date date NOT NULL,
    nationality character varying(20) COLLATE pg_catalog."default" NOT NULL,
    blood_type character varying(3) COLLATE pg_catalog."default" NOT NULL,
    allergies character varying(50) COLLATE pg_catalog."default" NOT NULL,
    department character varying(36) COLLATE pg_catalog."default" NOT NULL,
    photo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    status character varying(15) COLLATE pg_catalog."default" NOT NULL DEFAULT 'To check'::character varying,
    create_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT employees_pkey PRIMARY KEY (id),
    CONSTRAINT employees_ci_key UNIQUE (ci),
    CONSTRAINT employees_rif_key UNIQUE (rif),
    CONSTRAINT employees_fkey FOREIGN KEY (department)
        REFERENCES public.departments (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.employees
    OWNER to postgres;

"id"	"name"
"60cae9ce-8a4e-4dc2-8761-8981262fe3c4"	"SEGURIDAD"
"1fb71930-ddc8-419e-89f1-d7e165e889cc"	"ADMINISTRACIÓN"
"b174fb5d-69f6-401f-8493-51f87726b985"	"MANTENIMIENTO"

"id"	"role"	"permissions"
"048ae22a-ef69-44a8-a02e-6e00334ab472"	"ADMIN"	"{""Timebooks"": ""all""}"
"f3b929f9-71c6-4932-a820-04a111ca92fc"	"SECRETARY"	"{""Timebooks"": ""all""}"
"d40a4a50-7aaf-48cf-a582-02932c8e2e89"	"EMPLOYEE"	"{""Timebooks"": ""own""}"
"e5c6c955-5463-459c-b789-134053f666bc"	"TREASURER"	"{""Timebooks"": ""own""}"

-- Table: public.users
-- DROP TABLE IF EXISTS public.users;
CREATE TABLE IF NOT EXISTS public.users
(
    id character varying(36) COLLATE pg_catalog."default" NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    role character varying(32) COLLATE pg_catalog."default" NOT NULL,
    employee character varying(15) COLLATE pg_catalog."default" NOT NULL,
    password character varying(1024) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default",
    status character varying(15) COLLATE pg_catalog."default" NOT NULL DEFAULT 'To check'::character varying,
    create_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_name_key UNIQUE (name),
    CONSTRAINT users_employee_fkey FOREIGN KEY (employee)
        REFERENCES public.employees (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT users_role_fkey FOREIGN KEY (role)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.users
    OWNER to postgres;





      useEffect(async () => {
    const response = await fetch('http://localhost:4000/departments')
    const data = response.json()
    setDepartments(data)
  }, [])


    {
                        departments.map(department => (
                          <option key={department.id} value={department.id}>{department.name}</option>
                        ))
                      }
*/

const Register = () => {
  //Employee
  const ci = useRef('')
  const rif = useRef('')
  const first_name = useRef('')
  const middle_name = useRef('')
  const last_name = useRef('')
  const surname = useRef('')
  const address = useRef('')
  const phone = useRef('')
  const birth_date = useRef('')
  const start_date = useRef('')
  const nationality = useRef('')
  const blood_type = useRef('')
  const allergies = useRef('')
  const departments = useRef('')

  //User
  const name = useRef('')
  const password = useRef('')
  const confirm = useRef('')
  const email = useRef('')

  const handleSubmit = async (e) => {

  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center background-tech">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4 bg-secondary-subtle">
                <CForm onSubmit={handleSubmit}>
                  <h1 className='text-black'>Register</h1>
                  <p className="text-black">Create your account</p>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilLockLocked} /></CInputGroupText>
                    <CFormInput type='text' placeholder='ID card' required ref={ci} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilLockLocked} /></CInputGroupText>
                    <CFormInput type='text' placeholder='R.I.F.' required ref={rif} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput type='text' placeholder='First name' required ref={first_name} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput type='text' placeholder='Middle name' ref={middle_name} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput type='text' placeholder='Last name' required ref={last_name} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput type='text' placeholder='Surname' ref={surname} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilLocationPin} /></CInputGroupText>
                    <select required ref={nationality} className='form-select'>
                      <option value="">Select your nationality</option>
                      <option value="VE">Venezuelan</option>
                    </select>
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilLocationPin} /></CInputGroupText>
                    <CFormInput type='text' placeholder='Address' required ref={address} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilPhone} /></CInputGroupText>
                    <CFormInput type='text' placeholder='Phone' ref={phone} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon className='me-1' icon={cilCalendar} />Birth Date</CInputGroupText>
                    <CFormInput type='date' required ref={birth_date} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon className='me-1' icon={cilCalendar} />Start Date</CInputGroupText>
                    <CFormInput type='date' required ref={start_date} />
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilHeart} /></CInputGroupText>
                    <select required ref={blood_type} className='form-select'>
                      <option value="">Select your blood type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </CInputGroup>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText><CIcon icon={cilHeart} /></CInputGroupText>
                    <CFormInput type='text' placeholder='What are you allergic to?' ref={allergies} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" required ref={name} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilAt} /></CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" required ref={email} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilLockLocked} /></CInputGroupText>
                    <select required ref={departments} className='form-select'>
                      <option value="">Select your department</option>
                    </select>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilLockLocked} /></CInputGroupText>
                    <CFormInput type="password" placeholder="Password" autoComplete="new-password" required
                      ref={password} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText><CIcon icon={cilLockLocked} /></CInputGroupText>
                    <CFormInput type="password" placeholder="Repeat password" autoComplete="new-password"
                      required ref={confirm} />
                  </CInputGroup>

                  <div className="d-grid"><CButton color="success" type='submit'>Create Account</CButton></div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
