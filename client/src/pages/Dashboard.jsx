// import {
//   FilePenLineIcon,
//   PencilIcon,
//   PlusIcon,
//   TrashIcon,
//   UploadCloud,
//   UploadCloudIcon,
//   XIcon,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { dummyResumeData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
//   const [allResume, setAllResume] = useState([]);
//   const [showCreateResume, setShowCreateResume] = useState(false);
//     const [showUploadResume, setShowUploadResume] = useState(false);

//   const [title, setTitle] = useState("");

//   const navigate = useNavigate();

//   const loadAllResumes = async () => {
//     setAllResume(dummyResumeData);
//   };

//   const createResume = async (e) => {
//     e.preventDefault();
//     setShowCreateResume(false);
//     navigate(`/app/builder/res123`);
//   };

//   const uploadResume = async (e) => {
//     e.stopPropagation();
//     setShowUploadResume(false)
//     navigate(`/app/builder/res123`)
//   }
//   useEffect(() => {
//     loadAllResumes();
//   }, []);

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
//           Welcome, John Doe
//         </p>

//         {/* Upper Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setShowCreateResume(true)}
//             className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
//           >
//             <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
//             <p className="text-sm group-hover:text-indigo-600 transition-all">
//               Create Resume
//             </p>
//           </button>

//           <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
//             <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
//             <p className="text-sm group-hover:text-purple-600 transition-all">
//               Upload Existing
//             </p>
//           </button>
//         </div>

//         <hr className="border-slate-300 my-6 sm:w-[305px]" />

//         {/* Resume Cards */}
//         <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
//           {allResume.map((resume, index) => {
//             const baseColor = colors[index % colors.length];

//             return (
//               <div key={index} className="relative w-full sm:max-w-36">
//                 <button
//                   className="relative w-full h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
//                   style={{
//                     background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
//                     borderColor: `${baseColor}40`,
//                   }}
//                 >
//                   {/* Hover Action Icons */}
//                   <div className="absolute top-1 right-1 hidden group-hover:flex gap-1">
//                     <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
//                     <PencilIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
//                   </div>

//                   {/* Resume Icon */}
//                   <FilePenLineIcon
//                     className="size-7 group-hover:scale-105 transition-all"
//                     style={{ color: baseColor }}
//                   />

//                   {/* Title */}
//                   <p
//                     className="text-sm group-hover:scale-105 transition-all px-2 text-center"
//                     style={{ color: baseColor }}
//                   >
//                     {resume.title}
//                   </p>

//                   {/* Updated Date */}
//                   <p className="absolute bottom-1 text-[11px] text-slate-500 group-hover:text-slate-700 transition-all">
//                     Updated on {new Date(resume.updatedAt).toLocaleDateString()}
//                   </p>
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Create Resume Modal */}
//         {showCreateResume && (
//           <form
//             onSubmit={createResume}
//             onClick={() => setShowCreateResume(false)}
//             className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
//             >
//               <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

//               <input
//                 type="text"
//                 placeholder="Enter resume title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
//                 required
//               />

//               <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
//                 Create Resume
//               </button>

//               <XIcon
//                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
//                 onClick={() => {
//                   setShowCreateResume(false);
//                   setTitle("");
//                 }}
//               />
//             </div>
//           </form>
//         )}
           
//           {
//             showUploadResume && (
//               <form
//             onSubmit={uploadResume}
//             onClick={() => setShowUploadResume(false)}
//             className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
//             >
//               <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

//               <input
//                 type="text"
//                 placeholder="Enter resume title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
//                 required
//               />
//               <div>
//                 <label htmlFor="resume-input" className="block text-sm text-slate-700"> Select resume file 
//                   <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
//                        {
//                         resume ? (
//                           <p className="text-gren-700"> {resume.name}</p>
//                         ) : (
//                           <>
//                           <UploadCloud className="size-14 stroke-1" />
//                           <p>Upload resume</p>
//                           </>
//                         )
//                        }    
//                   </div>
//                   </label>
//               </div>

//               <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
//                 Upload Resume
//               </button>

//               <XIcon
//                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
//                 onClick={() => {
//                   setShowUploadResume(false);
//                   setTitle("");
//                 }}
//               />
//             </div>
//           </form>
//             )
//           }

//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// chat gpt version 


import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResume, setAllResume] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [editResumeId, setEditResumeId] = useState("");

  const [title, setTitle] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    setAllResume(dummyResumeData);
  };

  const createResume = async (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter a resume title");
    setShowCreateResume(false);
    navigate(`/app/builder/res123`);
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    if (!resumeFile) return alert("Please select a resume file");
    setShowUploadResume(false);
    navigate(`/app/builder/res123`);
  };

  // Update resume title
  const editTitle = (e) => {
    e.preventDefault();
    if (!title) return;

    setAllResume((prevResumes) =>
      prevResumes.map((resume) =>
        resume.id === editResumeId ? { ...resume, title } : resume
      )
    );
    setEditResumeId("");
    setTitle("");
  };

  // Delete resume
const deleteResume = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this resume?");
  if (!confirmDelete) return;

  setAllResume((prevResumes) => prevResumes.filter((resume) => resume.id !== id));
};

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, John Doe
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all"
          >
            <PlusIcon className="size-11 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600">Create Resume</p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <UploadCloudIcon className="size-11 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-purple-600">Upload Existing</p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResume.map((resume, index) => {
            const baseColor = colors[index % colors.length];

            return (
              <div key={resume.id} className="relative w-full sm:max-w-36">
                <button
                  onClick={() => navigate(`/app/builder/${resume.id}`)}
                  className="relative w-full h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                    borderColor: `${baseColor}40`,
                  }}
                >
                  <div className="absolute top-1 right-1 hidden group-hover:flex gap-1">
                    <TrashIcon
  onClick={(e) => {
    e.stopPropagation();
    deleteResume(resume.id); // <-- delete on click
  }}
  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700"
/>

                    <PencilIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditResumeId(resume.id);
                        setTitle(resume.title);
                      }}
                      className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700"
                    />
                  </div>

                  <FilePenLineIcon
                    className="size-7 group-hover:scale-105"
                    style={{ color: baseColor }}
                  />

                  <p
                    className="text-sm group-hover:scale-105 px-2 text-center"
                    style={{ color: baseColor }}
                  >
                    {resume.title}
                  </p>

                  <p className="absolute bottom-1 text-[11px] text-slate-500 group-hover:text-slate-700">
                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        {/* Create Resume Modal */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
                required
              />

              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Create Resume
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {/* Upload Resume Modal */}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
                required
              />

              <input
                id="resume-input"
                type="file"
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files[0])}
              />

              <label htmlFor="resume-input" className="block text-sm text-slate-700">
                Select resume file
                <div className="flex flex-col items-center justify-center gap-2 border text-slate-400 border-dashed rounded-md p-4 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
                  {resumeFile ? (
                    <p className="text-green-700">{resumeFile.name}</p>
                  ) : (
                    <>
                      <UploadCloud className="size-14 stroke-1" />
                      <p>Upload resume</p>
                    </>
                  )}
                </div>
              </label>

              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Upload Resume
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                  setResumeFile(null);
                }}
              />
            </div>
          </form>
        )}

        {/* Edit Resume Modal */}
        {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeId("")}
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>

              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
                required
              />

              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Update
              </button>

              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                onClick={() => {
                  setEditResumeId("");
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
