import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="font-semibold text-2xl ">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and Start your AI Mockup Interview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview />
      </div>
      {/* Previous Interview List */}
      <div>
        <InterviewList />
      </div>
    </div>
  );
};

export default Dashboard;
