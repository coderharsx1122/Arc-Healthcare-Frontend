import React, { useEffect, useState } from 'react'
import { Avatar } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addDoctorReviewAsync, doctorProfile, getDoctorProfileAsync, getPatientDashboardAsync, patientDashBoard, requestAppointmentAsync } from '../patientSlice';
import ImageModal from '../../../Components/ImageModal';
import { Box, Modal } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useController, useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import { extractDate } from '../../../Utils/UtilFunctions';

function DoctorProfileForPatient() {
    const { id } = useParams();
    console.log(id)
    const dispatch = useDispatch()
    const DoctorProfile = useSelector(doctorProfile)
    const dashboardPatient = useSelector(patientDashBoard)
    const [isAvatarModal, setAvatarModal] = useState(false)
    const [isRequestAppointment, setIsRequestAppointment] = useState(false)
    const [isRateDoctor, setIsRateDoctor] = useState(false)
    const [requestAppointmentData, setRequestAppointmentData] = useState({})

    const handleClick = () => setAvatarModal(!isAvatarModal)
    const handleIsRequestAppointment = () => {
        setIsRequestAppointment(!isRequestAppointment)
        if (DoctorProfile !== null && dashboardPatient !== null) {
            setRequestAppointmentData({
                patientId: dashboardPatient.patientInfo.id,
                doctorId: DoctorProfile.doctorInfo.id,
                patientName: dashboardPatient.patientInfo?.personalInfo.firstName + dashboardPatient.patientInfo?.personalInfo.lastName,
                patientPhone: dashboardPatient.patientInfo.phone
            })
        }
    }

    const handleIsRateDoctort = () => { setIsRateDoctor(!isRateDoctor) }


    useEffect(() => {
        if (dashboardPatient === null) dispatch(getPatientDashboardAsync())
        dispatch(getDoctorProfileAsync(id))
    }, [dispatch, dashboardPatient])
    return (
        <div>
            {
                DoctorProfile &&
                <>
                    <div className="p-6 flex flex-col ">

                        <div className="container mx-auto my-5 p-5 ">
                            <div className="md:flex no-wrap md:-mx-2 ">
                                <div className="w-full md:w-3/12 md:mx-2">
                                    {/* Profile Card */}
                                    <div className="bg-white p-3 flex flex-col items-center border-green-400">
                                        <div className="image overflow-hidden">
                                            <Avatar src={DoctorProfile.doctorInfo.avatar} alt="avatar" className='rounded-full h-[100px] w-[100px]' onClick={handleClick} />
                                        </div>
                                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                                            {DoctorProfile.doctorInfo.personalInfo.firstName}   {DoctorProfile.doctorInfo.personalInfo.lastName}
                                        </h1>
                                        <h3 className="text-gray-600 font-lg text-semibold leading-6">
                                            {DoctorProfile.doctorInfo?.professionalInfo?.specializations[0]}
                                        </h3>

                                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 w-full divide-y rounded shadow-sm">
                                            <li className="flex items-center py-3">
                                                <span>Status</span>
                                                <span className="ml-auto">
                                                    <span className="bg-[#7371fc] py-1 px-2 rounded text-white text-sm">
                                                        Active
                                                    </span>
                                                </span>
                                            </li>
                                            <li className="flex items-center py-3">
                                                <span>Joined since</span>
                                                <span className="ml-auto">   {DoctorProfile.doctorInfo?.createdAt.split('T')[0]} </span>
                                            </li>
                                        </ul>
                                        <div className='flex flex-col items-start w-full'>
                                            <button className='bg-[#7371fc] py-1 px-2 rounded text-white text-sm my-2' onClick={handleIsRequestAppointment}>Request Appointment</button>
                                            {
                                                DoctorProfile.appointmentList.length > 0 &&
                                                <button className='bg-green-400 py-1 px-2 rounded text-white text-sm mb-2' onClick={handleIsRateDoctort} >Rate Doctor</button>
                                            }
                                        </div>
                                    </div>
                                    {/* End of profile card */}
                                    <div className="my-4" />

                                </div>
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
                                                    <div className="px-4 py-2">   {DoctorProfile.doctorInfo.personalInfo.firstName}   {DoctorProfile.doctorInfo.personalInfo.lastName}</div>
                                                </div>

                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                                    <div className="px-4 py-2">{DoctorProfile.doctorInfo?.personalInfo?.gender}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                    <div className="px-4 py-2">  <a href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">{DoctorProfile.doctorInfo?.phone}</a></div>

                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                                    <div className="px-4 py-2">{DoctorProfile.doctorInfo?.address?.street}, {DoctorProfile.doctorInfo?.address?.city}, {DoctorProfile.doctorInfo?.address?.state}</div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                                    <div className="px-4 py-2">
                                                        <a className="text-blue-800" href={`mailto:${DoctorProfile.doctorInfo?.email}`}>
                                                            {DoctorProfile.doctorInfo?.email}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                                    <div className="px-4 py-2">
                                                        {DoctorProfile.doctorInfo?.personalInfo.dateOfBirth}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="px-4 py-2 font-semibold">Consultation Fees</div>
                                                    <div className="px-4 py-2">
                                                        <strong>₹</strong> {DoctorProfile.doctorInfo?.consultationFees}
                                                    </div>
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
                                                </div>
                                                <ul className="list-inside space-y-2">
                                                    {
                                                        DoctorProfile.doctorInfo?.professionalInfo?.workExperience.map((experience) => (
                                                            <li>
                                                                {
                                                                    experience.position &&
                                                                    <>
                                                                        <div className="text-teal-600">{experience.position} at {experience.hospitalName}</div>
                                                                        <div className="text-gray-500 text-xs">from  {experience.startDate.split('-')[0]} to {experience.endDate ? experience.endDate.split('-')[0] : "Current"}</div>
                                                                    </>
                                                                }
                                                            </li>

                                                        ))
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
                                                </div>
                                                <ul className="list-inside space-y-2">
                                                    {
                                                        DoctorProfile.doctorInfo?.professionalInfo?.qualifications.map((qualification) => (
                                                            <li>
                                                                {qualification.degree &&
                                                                    <>
                                                                        <div className="text-teal-600">{qualification.degree} from {qualification.university}</div>
                                                                        <div className="text-gray-500 text-xs">Passing Year {qualification.year ? qualification.year : "Current"}</div>
                                                                    </>
                                                                }
                                                            </li>

                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End of Experience and education grid */}
                                    </div>
                                    {/* End of profile tab */}

                                </div>
                            </div>

                            <ImageModal avatar={DoctorProfile.doctorInfo.avatar} handleClick={handleClick} isAvatarModal={isAvatarModal} />
                            <RequestAppointmentModal handleClick={handleIsRequestAppointment} isRequestAppointment={isRequestAppointment} requestAppointmentData={requestAppointmentData} setRequestAppointmentData={setRequestAppointmentData} />
                            <RateDoctorModal handleClick={handleIsRateDoctort} isRateDoctor={isRateDoctor} dashboardPatient={dashboardPatient} doctorProfile={DoctorProfile} />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
                            <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded ">
                                <div className="rounded-t mb-0 px-0 border-0">
                                    <div className="flex flex-wrap items-center px-4 py-2">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                                                Your Appointments with {DoctorProfile.doctorInfo.personalInfo.firstName}   {DoctorProfile.doctorInfo.personalInfo.lastName}
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
                                                        See Appointmet
                                                    </th>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    DoctorProfile.appointmentList?.map(e =>

                                                        <tr className="text-gray-700 dark:text-gray-100">
                                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                                {e.appointmentDate}
                                                            </th>
                                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {

                                                                    <Link to={`/patient/appointment/${e.id}`} className='bg-[#7371fc] text-white rounded-sm text-sm px-2 py-1'>Visit</Link>
                                                                }
                                                            </td>
                                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <div className="flex items-center">
                                                                    <span className="mr-2">{e.status}</span>
                                                                    <div className="relative w-full">
                                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                                            <div
                                                                                style={{ width: "100%" }}
                                                                                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center `}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3">
                                    <span clas="text-green-500">
                                        <EventAvailableIcon className='h-[24px]' />
                                    </span>
                                    <span className="tracking-wide">Available on</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-2 rounded-md">
                                        <div className="flex justify-between flex-col">
                                            {DoctorProfile.doctorInfo?.availability?.availableDays?.map((day) => (
                                                <>
                                                    <div key={day} className="text-gray-700 font-medium px-2 flex w-full my-2">
                                                        <p className='mr-12 w-[25px] '>
                                                            {day}
                                                        </p>
                                                        <div key={day} className="relative bg-[#7371fc] text-white rounded-full px-4 py-1  ml-5 ">
                                                            <p className="text-xs font-medium">{DoctorProfile.doctorInfo?.availability?.availableTime?.startTime} - {DoctorProfile.doctorInfo?.availability?.availableTime?.endTime}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className='col-span-2'>
                                <h1 className='text-center text-xl font-semibold'>Reviews by Patients</h1>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">

                                    {
                                        DoctorProfile?.doctorInfo?.reviews?.map(e => (

                                            <div className="bg-white rounded-lg shadow-md p-4 mb-4  col-span-1 mx-2">
                                                <p className="text-gray-700">{e.comment}</p>
                                                <Rating value={e.rating} readOnly size='small' /> {/* Assuming you have a Rating component */}
                                                <h2 className="text-sm font-sm mb-2"> By {e.patientName}</h2>
                                                <p className='text-sm text-gray-400'> {e.date}</p>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

const RequestAppointmentModal = ({ handleClick, isRequestAppointment, requestAppointmentData, setRequestAppointmentData }) => {
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(false)
    const [allergy, setAllergy] = useState('')
    const submitHandler = () => {
        setDisable(!disable)
        const requestData = {
            patientId: requestAppointmentData.patientId,
            doctorId: requestAppointmentData.doctorId,
            patientName: requestAppointmentData.patientName,
            patientPhone: requestAppointmentData.patientPhone,
            allergy

        }
        console.log(requestData)
        dispatch(requestAppointmentAsync(requestData))
        setTimeout(() => {
            handleClick()
        }, 1000)
    }

    useEffect(() => {

    }, [dispatch])

    return (
        <Modal
            open={isRequestAppointment}
            onClose={handleClick}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            className='flex items-center justify-center p-1 '
        >
            <Box className='relative border  border-none bg-white sm:w-auto  w-[90%] flex justify-center px-2'>
                <div className='sm:w-[25vw] w-[90vw] flex flex-col justify-center items-center p-2'>
                    <h1>Request An Appointment to Doctor</h1>
                    <input type="text" placeholder='Enter problem you have' onChange={e => {
                        setAllergy(e.target.value)
                    }} />

                    <button disabled={disable} className='bg-[#7371fc] text-white rounded-sm text-sm px-2 py-1 w-[90px] mt-3' onClick={submitHandler}>Request</button>
                </div>
            </Box>
        </Modal>
    )
}
const RateDoctorModal = ({ handleClick, isRateDoctor, dashboardPatient, doctorProfile }) => {
    const { setValue, handleSubmit, control, register, formState: { errors } } = useForm()


    const dispatch = useDispatch()
    const [rating, setRating] = useState(0);
    const [disable, setDisable] = useState(false)
    const submitHandler = (formdata) => {

        const formattedDate = extractDate(new Date())

        const data = {
            comment: formdata.comment,
            rating,
            patientName: dashboardPatient?.patientInfo?.personalInfo?.firstName + " " + dashboardPatient?.patientInfo?.personalInfo?.lastName,
            date: formattedDate
        }
        console.log()
        setDisable(true)
        setTimeout(() => { handleClick() }, 1000)

        const req = {
            data,
            id: doctorProfile?.doctorInfo?.id
        }
        dispatch(addDoctorReviewAsync(req))
    }

    useEffect(() => {

    }, [dispatch])

    return (
        <Modal
            open={isRateDoctor}
            onClose={handleClick}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            className='flex items-center justify-center p-1 '
        >
            <Box className='relative border  border-none bg-white sm:w-auto  w-[90%] flex justify-center px-2 rounded-md'>
                <form onSubmit={handleSubmit(submitHandler)} className='flex justify-center items-center flex-col p-2'>
                    <div className='mb-4'>
                        <h1 class="text-md font-medium text-center mb-2">Give your review on Doctor</h1>


                    </div>
                    <div className='mb-4'>
                        <input
                            {...register(`comment`)}
                            type="text"
                            id={`comment`}
                            placeholder="Write Your Review"
                            className="px-3 py-2 rounded-md border focus:outline-none focus:ring-blue-500 focus:ring-1"
                        />

                    </div>

                    <div className='mb-4'>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                console.log(event)
                                console.log(newValue)
                                setRating(newValue);
                            }}
                        />
                    </div>
                    <div className="md:flex mb-4">
                        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                            <button disabled={disable} className='bg-[#7371fc] text-white rounded-sm text-sm p-2'>Submit Review</button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

// rating component




export default DoctorProfileForPatient
