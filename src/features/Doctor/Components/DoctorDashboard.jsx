import { Avatar } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function DoctorDashBoard() {
  return (
    <>
      {/* component */}

      {/* end sidenav */}
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
                  <div className="image overflow-hidden">
                    <Avatar src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt="avatar" className='rounded-full h-[100px] w-[100px]' />
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    Jane Doe
                  </h1>
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    Owner at Her Company Inc.
                  </h3>
                  <p className="text-sm sm:text-start text-center text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
                    deserunt
                  </p>
               
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
                        <div className="px-4 py-2">Jane Doe</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">Male</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">  <a href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">Send Message</a></div>

                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Current Address</div>
                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Permanant Address</div>
                        <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email.</div>
                        <div className="px-4 py-2">
                          <a className="text-blue-800" href="mailto:jane@example.com">
                            jane@example.com
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">Feb 06, 1998</div>
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
                        <li>
                          <div className="text-teal-600">Owner at Her Company Inc.</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
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
                        <li>
                          <div className="text-teal-600">Masters Degree in Oxford</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                        <li>
                          <div className="text-teal-600">Bachelors Degreen in LPU</div>
                          <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
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
                  <div className="text-2xl font-semibold">2</div>
                </div>
                <div className="text-sm font-medium text-gray-400">Appointments</div>
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
            <a
              href="/gebruikers"
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-semibold">100</div>
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                    +30%
                  </div>
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
            <a
              href="/dierenartsen"
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
          <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-semibold mb-1">100</div>
                <div className="text-sm font-medium text-gray-400">Blogs</div>
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
            <a
              href=""
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                    Users
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Role
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Administrator
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        1
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">70%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: "70%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        6
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">40%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: "40%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        5
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">45%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                              <div
                                style={{ width: "45%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        User
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        4
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">60%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{ width: "60%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">Activities</div>
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
            <div className="overflow-hidden">
              <table className="w-full min-w-[540px]">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                        >
                          <i className="ri-more-2-fill" />
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
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                        >
                          <i className="ri-more-2-fill" />
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        {/* End Content */}
      </div>
    </>

  );
}
