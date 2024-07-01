import { Outlet } from "react-router-dom";
import TopNavEmpty from "../src/components/TopNavEmpty";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetail";
import React, { useEffect, useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    location: "San Francisco",
    company: "ABC Inc.",
  },
  {
    id: 2,
    title: "Web Developer",
    location: "New York",
    company: "XYZ Corp.",
  },
  {
    id: 3,
    title: "Data Analyst",
    location: "London",
    company: "123 Co.",
  },
];

export default function HomeJS() {
  return (
    <div className="flex h-screen bg-white">
      <TopNavEmpty title="Home" />{" "}
      <div>
        {/* Sticky Navigation Bar */}
        <div className="flex-1 p-8">
          <div className=" mt-10">
            {/* Search and Filter */}
            <h2 className="flex text-2xl font-bold text-left mb-4">
              Available Jobs{" "}
            </h2>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg mr-4"
              />
              <select className="px-4 py-2 border rounded-lg">
                <option value="place">Place</option>
                <option value="name">Name</option>
              </select>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4">
                Search
              </button>
            </div>
            {/* Table */}
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">No</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Place</th>
                  <th className="px-4 py-2 border">Company</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((jobItem, index) => (
                  <tr key={jobItem.id}>
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">
                      <Link to={`/job/${jobItem.id}`}>{jobItem.title}</Link>
                    </td>
                    <td className="px-4 py-2 border">
                      <Link to={`/job/${jobItem.id}`}>{jobItem.location}</Link>
                    </td>
                    <td className="px-4 py-2 border">
                      <Link to={`/job/${jobItem.id}`}>{jobItem.company}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
