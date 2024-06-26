import { Avatar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { addQualificationAsync, addWorkExperienceAsync, createAppointmetAsync, doctorDashBoard, doctorErrorMessage, getDoctorDashboardAsync, isDoctorError, rejectAppointmetAsync, updateAppointmentAsync, updateAvailabilityAsync } from '../doctorSlice';
import { Box, Modal, TextField } from '@mui/material';
import ImageModal from '../../../Components/ImageModal';
import { extractTime } from '../../../Utils/UtilFunctions';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { useFieldArray, useForm } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Availability } from './DoctorRegister';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function DoctorDashBoard() {

  const dashboard = useSelector(doctorDashBoard)
  const [todaysAppointmentCount, setTodaysAppCount] = useState(0)
  const dispatch = useDispatch()
  const [isAvatarModal, setAvatarModal] = useState(false)
  const [isUpdateAvaibility, setUpdateAvaibility] = useState(false)
  const [isAppointAppointment, setAppointAppointment] = useState(false)
  const [isAddQualification, setAddQualification] = useState(false)
  const [isAddWorkExperience, setAddWorkExperience] = useState(false)
  const [appointmentRequest, setAppointmentRequest] = useState({})

  const handleClick = () => { setAvatarModal(!isAvatarModal) }
  const handleIsAvaibilityClick = () => { setUpdateAvaibility(!isUpdateAvaibility) }
  const handleIsAppointAppointment = () => { setAppointAppointment(!isAppointAppointment) }
  const handleIsAddQualification = () => { setAddQualification(!isAddQualification) }
  const handleIsAddWorkExperience = () => { setAddWorkExperience(!isAddWorkExperience) }

  const statusColor = {
    pending: "green",
    completed: "green",
    rejeted: "red"
  }


  const rejectAppointment = (id) => {
    console.log(id)
    dispatch(rejectAppointmetAsync(id))
  }

  useEffect(() => {
    dispatch(getDoctorDashboardAsync())
    setTodaysAppCount(0)
    dashboard?.appointmentList?.forEach(e => {
      // Create a Date object from the provided string
      const date = new Date(e.appointmentDate);
      // Get today's date
      const today = new Date();
      if (date.getDate() === today.getDate() && date.getMonth() == date.getMonth()) setTodaysAppCount(todaysAppointmentCount + 1)
    })
  }, [dispatch])
  return (
    <>
      {dashboard &&
        <div className='flex flex-col'>

          {/* Content */}
          <div className="p-6 flex flex-col ">
            <Link to="/" className='flex text-white bg-[#7371fc] w-[75px] p-1 rounded-[10px]'><ArrowBackIcon /> Home</Link>
            {/* Profile */}
            <div className="container mx-auto my-5 p-5 ">
              <div className="md:flex no-wrap md:-mx-2 ">
                {/* Left Side */}
                <div className="w-full md:w-3/12 md:mx-2">
                  {/* Profile Card */}
                  <div className="bg-white p-3 flex flex-col items-center border-green-400">
                    <div className="image overflow-hidden relative ">
                      <Avatar src={dashboard.doctorInfo?.avatar} alt="avatar" className='rounded-full h-[100px] w-[100px]' onClick={handleClick} />
                      <EditOutlinedIcon className="cursor-pointer text-gray-500 hover:text-blue-500 transition duration-300 absolute top-[-10px] "  />
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                      {dashboard.doctorInfo?.personalInfo?.firstName}  {dashboard.doctorInfo?.personalInfo?.lastName}
                    </h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">
                      {dashboard.doctorInfo?.professionalInfo?.specializations[0]}
                    </h3>

                  </div>
                  {/* End of profile card */}
                  <div className="my-4" />

                </div>

                {/* Right Side */}
                <div className="w-full md:w-9/12 mx-2 ">
                  {/* Profile tab */}
                  {/* About Section */}
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Name</div>
                          <div className="px-4 py-2"> {dashboard.doctorInfo?.personalInfo.firstName}  {dashboard.doctorInfo?.personalInfo.lastName}</div>
                        </div>

                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Gender</div>
                          <div className="px-4 py-2">Male</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Contact No.</div>
                          <div className="px-4 py-2">  <a href={`https://wa.me/${dashboard.doctorInfo?.phone}`}> {dashboard.doctorInfo?.phone} </a></div>

                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Address</div>
                          <div className="px-4 py-2">{dashboard.doctorInfo?.address.street}, {dashboard.doctorInfo?.address.city}, {dashboard.doctorInfo?.address.state}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Clinic Name</div>
                          <div className="px-4 py-2">{dashboard.doctorInfo?.clinicName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email</div>
                          <div className="px-4 py-2">
                            <a className="text-blue-800" href={`mailto:${dashboard.doctorInfo?.email}`}>
                              {dashboard.doctorInfo?.email}
                            </a>
                          </div>
                        </div>

                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Birthday</div>
                          <div className="px-4 py-2">{dashboard.doctorInfo?.personalInfo.dateOfBirth}</div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* End of about section */}
                  <div className="my-4" />
                  {/* Experience and education */}
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                          <span clas="text-green-500">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </span>
                          <span className="tracking-wide">Experience</span>
                          <div className="group relative flex"> {/* Wrap in a group for hover styles */}
                          <button onClick={handleIsAddWorkExperience}>
                            <EditOutlinedIcon className="cursor-pointer text-gray-500 hover:text-blue-500 transition duration-300" />
                          </button>
                            <span className="absolute invisible group-hover:visible text-sm text-gray-700 font-sm px-2 py-1 rounded bg-gray-200 shadow-sm top-full left-0">
                              Add Experience
                            </span>
                          </div>
                        </div>
                        <ul className="list-inside space-y-2">
                          {dashboard.doctorInfo?.professionalInfo?.workExperience?.map((e) =>

                            <li key={e.startDate}>
                              {
                                e.position &&
                                <>
                                  <div className="text-teal-600">{e.position} at {e.hospitalName}</div>
                                  <div className="text-gray-500 text-xs">{e.startDate.split('-')[0]} to {e.endDate ? e.endDate.split('-')[0] : 'Cureent'}  </div>
                                </>}
                            </li>
                          )
                          }
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                          <span clas="text-green-500">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path
                                fill="#fff"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                              />
                            </svg>
                          </span>
                          <span className="tracking-wide">Education</span>
                          <div className="group relative flex" > {/* Wrap in a group for hover styles */}
                          <button onClick={handleIsAddQualification}>
                            <EditOutlinedIcon className="cursor-pointer text-gray-500 hover:text-blue-500 transition duration-300"  />
                          </button>
                            <span className="absolute invisible group-hover:visible text-sm text-gray-700 font-sm px-2 py-1 rounded bg-gray-200 shadow-sm top-full left-0">
                              Add Qualification
                            </span>
                          </div>
                        </div>
                        <ul className="list-inside space-y-2">
                          {dashboard.doctorInfo?.professionalInfo?.qualifications.map((e) =>


                            <li>
                              {e.degree &&
                                <>
                                  <div className="text-teal-600">{e.degree} from {e.university}</div>
                                  <div className="text-gray-500 text-xs">Passing Year {e.year ? e.year : "Current"}</div>
                                </>
                              }
                            </li>
                          )
                          }

                        </ul>
                      </div>
                    </div>
                    {/* End of Experience and education grid */}
                  </div>
                  {/* End of profile tab */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">{todaysAppointmentCount}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-400"> Today's Appointment</div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill" />
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">{dashboard.appointmentList?.length}</div>
                      {/* <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                        +30%
                      </div> */}
                    </div>
                    <div className="text-sm font-medium text-gray-400">Total Appointments</div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill" />
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols gap-6 mb-6">
              <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                <div className="rounded-t mb-0 px-0 border-0">
                  <div className="flex flex-wrap items-center px-4 py-2">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                        Appointments
                      </h3>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Date
                          </th>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            By
                          </th>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Status
                          </th>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Email
                          </th>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            See Appointmet
                          </th>
                          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                        </tr>
                      </thead>
                      <tbody>
                        {
                          dashboard.appointmentList?.map(e =>

                            <tr className="text-gray-700 dark:text-gray-100">
                              <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-4 text-left">
                                {e.appointmentDate}
                              </th>
                              <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-4 text-left">
                                {e.patientName}
                              </th>
                              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-4">
                                {e.status}
                              </td>
                              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                {e.patientEmail}
                              </td>
                              <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <Link to={`/doctor/appointment/${e.id}`} className='bg-[#7371fc] text-white rounded-sm text-sm px-2 py-1'>Visit</Link>
                              </td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-100 col-span-2 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Appointment Requests</div>
              </div>
              <div className="overflow-hidden overflow-x-auto">
                <table className="w-full min-w-[540px]">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Patient Name
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Allergy
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Phone Number
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Schedule
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Reject
                      </th>
                    </tr>
                  </thead>
                  {
                    dashboard.appointmentRequestList?.length > 0 ?

                      dashboard.appointmentRequestList?.map(e => (
                        <tr>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <div className="text-sm font-medium text-gray-400">
                              {e.createdAt.split('T')[0]}
                            </div>
                          </td>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <div className="text-sm font-medium text-gray-400">
                              {e.patientName}
                            </div>
                          </td>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <div className="text-sm font-medium text-gray-400">
                              {e.allergy}
                            </div>
                          </td>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <div className="text-sm font-medium text-gray-400">
                              {e.patientPhone}
                            </div>
                          </td>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <button className='bg-[#7371fc] text-white rounded-sm text-sm p-2' onClick={() => {
                              setAppointmentRequest(e)
                              handleIsAppointAppointment()
                            }}>Schedule </button>
                          </td>
                          <td className="py-2 px-4 border-b border-b-gray-50">
                            <button className='bg-red-500 text-white rounded-sm text-sm p-2' onClick={() => {
                              setAppointmentRequest(e)
                              rejectAppointment(e.id)
                            }}>Reject </button>
                          </td>
                        </tr>
                      ))
                      :
                      <div className="font-sm text-sm">No Appointment Request</div>
                  }
                </table>
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <h1 className="font-semibold text-base ">Availability</h1>
              <div className="flex justify-between flex-col">
                {dashboard.doctorInfo?.availability?.availableDays?.map((day) => (
                  <>
                    <div key={day} className="text-gray-700 font-medium px-2 flex w-full my-2">
                      <p className='mr-12 w-[25px] '>
                        {day}
                      </p>
                      <div key={day} className="relative bg-[#7371fc] text-white rounded-full px-4 py-1  ml-5 ">
                        <p className="text-xs font-medium">{dashboard.doctorInfo?.availability?.availableTime?.startTime} - {dashboard.doctorInfo?.availability?.availableTime?.endTime}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <button className='bg-[#7371fc] text-white rounded-sm text-sm p-2 mt-2' onClick={handleIsAvaibilityClick} >Update Availbility</button>
            </div>
          </div>
          {/* modals */}
          <ImageModal isAvatarModal={isAvatarModal} handleClick={handleClick} avatar={dashboard.doctorInfo?.avatar} />
          <UpdateAvailibity handleClick={handleIsAvaibilityClick} isUpdateAvaibility={isUpdateAvaibility} />
          <CreateAppointmet handleClick={handleIsAppointAppointment} isCreateAppointment={isAppointAppointment} appointmentRequest={appointmentRequest} />
          <AddQualification handleClick={handleIsAddQualification} isAddQualification={isAddQualification}   />
          <AddWorkExperience handleClick={handleIsAddWorkExperience} isAddWorkExperience={isAddWorkExperience}/>
          {/* End Content */}
        </div>
      }
    </>
  );
}

// Update Availibity modal
const UpdateAvailibity = ({ handleClick, isUpdateAvaibility }) => {
  const { setValue, handleSubmit, control, register, formState: { errors }, } = useForm()
  const dispath = useDispatch()
  const submitHandler = (data) => {
    console.log(data)
    dispath(updateAvailabilityAsync(data))
  }

  useEffect(() => { }, [dispath])

  return (
    <Modal
      open={isUpdateAvaibility}
      onClose={handleClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className='flex items-center justify-center p-1 '
    >
      <Box className='relative border  border-none bg-white sm:w-auto  w-[90%] flex justify-center px-2'>
        <form onSubmit={handleSubmit(submitHandler)} >
          <h1 className='m-2 font-semibold'>Update Avaibility</h1>
          <div className="md:flex mb-8">
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <Availability register={register} errors={errors} control={control} setValue={setValue} />
              <button className='bg-[#7371fc] text-white rounded-sm text-sm p-2'>Update Avaibility</button>
            </div>
          </div>

        </form>
      </Box>
    </Modal>
  )
}

// create Appointment modal
const CreateAppointmet = ({ handleClick, isCreateAppointment, appointmentRequest }) => {
  const { setValue, handleSubmit, control, register, formState: { errors } } = useForm()
  const dispath = useDispatch()
  const submitHandler = (data) => {
    console.log(data)
    const req = {
      requestData: data,
      id: appointmentRequest.id
    }
    console.log(req)
    dispath(createAppointmetAsync(req))
  }
  useEffect(() => {

    setValue('patientId', appointmentRequest.patientId)
    setValue('doctorId', appointmentRequest.doctorId)
  }, [isCreateAppointment])

  return (
    <Modal
      open={isCreateAppointment}
      onClose={handleClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className='flex items-center justify-center p-1 '
    >
      <Box className='relative border  border-none bg-white sm:w-[25vw]   w-[90%] flex justify-center px-2 '>
        <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center items-center flex-col p-2'>
          <div>

            <label htmlFor={``} className="text-sm font-sm text-gray-500">
              Appointment Date:
            </label>
            <input
              {...register(`appointmentDate`)}
              type="date"
              id={`endDate`}
              placeholder="Enter graduation year"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className="md:flex mb-8">
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <button className='bg-[#7371fc] text-white rounded-sm text-sm p-2'>Appoint Appointment</button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  )
}


// create Appointment modal
const AddQualification = ({ handleClick, isAddQualification }) => {
  const { setValue, handleSubmit, control, register, formState: { errors } } = useForm()

  const dispath = useDispatch()
  const submitHandler = (data) => {
    dispath(addQualificationAsync(data))
    console.log(data)
    setTimeout(()=>{handleClick()},1000)
  }
  useEffect(() => {


  }, [])

  return (
    <Modal
      open={isAddQualification}
      onClose={handleClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className='flex items-center justify-center p-1 '
    >
      <Box className='relative border  border-none bg-white sm:w-[25vw]   w-[90%] flex justify-center px-2 '>
        <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center items-center flex-col p-2'>
          <div className='mb-4'>
            <input
              {...register(`degree`)}
              type="text"
              id={`endDate`}
              placeholder="Degree"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className='mb-4'>
            <input
              {...register(`university`)}
              type="text"
              id={`endDate`}
              placeholder="University Name"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className='mb-4'>
            <input
              {...register(`year`)}
              type="number"
              id={`endDate`}
              placeholder="Graduation year"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className="md:flex mb-8">
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <button  className='bg-[#7371fc] text-white rounded-sm text-sm p-2'>Add Qualification</button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  )
}


// create Appointment modal
const AddWorkExperience = ({ handleClick, isAddWorkExperience }) => {
  const { setValue, handleSubmit, control, register, formState: { errors } } = useForm()

  const dispath = useDispatch()
  const submitHandler = (data) => {
    dispath(addWorkExperienceAsync(data))
    console.log(data)
    setTimeout(()=>{handleClick()},1000)
  }
  useEffect(() => {


  }, [])

  return (
    <Modal
      open={isAddWorkExperience}
      onClose={handleClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className='flex items-center justify-center p-1 '
    >
      <Box className='relative border  border-none bg-white sm:w-[25vw]   w-[90%] flex justify-center px-2 '>
        <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center items-center flex-col p-2'>
          <div className='mb-4'>
            <input
              {...register(`hospitalName`)}
              type="text"
              id={`endDate`}
              placeholder="Hospital Name"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className='mb-4'>
            <input
              {...register(`position`)}
              type="text"
              id={`endDate`}
              placeholder="Postion you worked at"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className='mb-4 flex flex-col text-center'>
            <label htmlFor="">Enter Start Date</label>
            <input
              {...register(`startDate`)}
              type="date"
              id={`endDate`}
              placeholder="Start Year"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className='mb-4 flex flex-col text-center'>
            <label htmlFor="">Enter End Date</label>
            <input
              {...register(`endDate`)}
              type="date"
              id={`endDate`}
              placeholder="End year"
              className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
            />

          </div>
          <div className="md:flex mb-8">
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <button  className='bg-[#7371fc] text-white rounded-sm text-sm p-2'>Add Work Experience</button>
            </div>
          </div>
        </form> 
      </Box>
    </Modal>
  )
}
