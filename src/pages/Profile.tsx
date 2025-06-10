import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Trophy, Code2, Brain, Rocket, Save, X } from 'lucide-react';
import axios from 'axios';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Developer',
    email: 'john.developer@example.com',
    username: 'johndeveloper',
    title: 'Senior Software Engineer'
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const profileDataRaw = localStorage.getItem("userData");
  const profileData = profileDataRaw ? JSON.parse(profileDataRaw) : null;

  const [formData, setFormData] = useState({
    git:"",
    x:"",
    linkedin:"",
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    
    try {
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://httpdump.app/dumps/7b837943-d0b6-4b03-a395-2311722c1d0a",{
            body: formData
        })
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex md:text-left flex-1">
              <div className="space-y-4 mb-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editedProfile.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={editedProfile.username}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={editedProfile.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex gap-2 justify-end mt-4">
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdate}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{profileData?.name}</h1>
                    <p className="text-gray-400 mb-1">@{profileData?.userName}</p>
                    <p className="text-gray-400 mb-2">{profileData?.email}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm"
                    >
                      Edit Profile
                    </button>
                  </div>
                )}
              </div>

              {/* social Links */}
              <form
                onSubmit={handleSubmit}
                className='flex gap-4 justify-center md:justify-start flex-col items-center flex-1'>
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-4">
                        <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
                        <input type="text" id='git' onChange={handleChange} placeholder='username' className='outline-none border-2 border-white/40 rounded-sm focus:border-blue-600'/>
                    </div>
                    <div className="flex gap-4 ">
                        <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                        <input type="text" id='x' onChange={handleChange} placeholder='username' className='outline-none border-2 border-white/40 rounded-sm focus:border-blue-600'/>
                    </div>
                    <div className="flex gap-4 ">
                        <Linkedin className="w-6 h- hover:text-blue-400 transition-colors6" />
                        <input type="text" id='linkedin' onChange={handleChange} placeholder='username' className='outline-none border-2 border-white/40 rounded-sm focus:border-blue-600'/>
                    </div>
                </div>
                <div className='flex w-full justify-center gap-10'>
                    <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors'>Edit</button>
                    <button type='submit' className='flex items-center gap-2 px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors'>Save</button>
                </div>
              </form>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Passionate software engineer with 5+ years of experience in building scalable web applications.
              Specialized in React, TypeScript, and modern web technologies. Always eager to learn and share
              knowledge with the developer community.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
              <h3 className="font-bold text-xl">150+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Code2 className="w-8 h-8 text-green-400 mb-2" />
              <h3 className="font-bold text-xl">10K+</h3>
              <p className="text-gray-400">Lines of Code</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Brain className="w-8 h-8 text-purple-400 mb-2" />
              <h3 className="font-bold text-xl">15+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Rocket className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="font-bold text-xl">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                <div key={skill} className="bg-gray-700 rounded-lg px-4 py-2 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;