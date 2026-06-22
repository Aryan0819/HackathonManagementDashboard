"use client";

import { useState } from "react";

import {
  UserCircle,
  Mail,
  Phone,
  GraduationCap,
  Pencil,
  Save,
  Shield,
  Calendar,
  Code
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {

  const { user } = useAuth();

  const [editing, setEditing] = useState(false);

  const [phone, setPhone] = useState(
    user?.phone || ""
  );

  const [institution, setInstitution] = useState(
    user?.institution || ""
  );

  const [skills, setSkills] = useState(
    user?.skills?.join(", ") || ""
  );

  const handleSave = async () => {

    try {

      // API call yahan lagani hai

      /*
      await api.put("/participants/profile",{
          phone,
          institution,
          skills: skills.split(",")
      })
      */

      alert("Profile Updated Successfully");

      setEditing(false);

    }

    catch (err) {

      alert("Failed to update profile");

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-3xl shadow-sm border p-8">

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">

              <UserCircle
                size={95}
                className="text-indigo-600"
              />

            </div>

            <div className="flex-1 text-center md:text-left">

              <h1 className="text-4xl font-bold text-gray-900">

                {user?.fullName || "Participant"}

              </h1>

              <p className="text-gray-500 mt-2 capitalize">

                {user?.role?.replace("_", " ")}

              </p>

              <div className="mt-4">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                  Active Account

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Main Grid */}

        <div className="grid md:grid-cols-2 gap-7 mt-8">

          {/* Personal Info */}

          <div className="bg-white rounded-3xl p-7 shadow-sm border">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold">

                Personal Information

              </h2>

              {

                !editing ?

                (

                  <button

                    onClick={() => setEditing(true)}

                    className="flex items-center gap-2 text-indigo-600 font-semibold"

                  >

                    <Pencil size={18} />

                    Edit

                  </button>

                )

                :

                (

                  <button

                    onClick={handleSave}

                    className="flex items-center gap-2 text-green-600 font-semibold"

                  >

                    <Save size={18} />

                    Save

                  </button>

                )

              }

            </div>

            <div className="space-y-7 mt-7">

              {/* Email */}

              <div className="flex gap-4">

                <Mail className="text-indigo-600" />

                <div>

                  <p className="text-sm text-gray-500">

                    Email

                  </p>

                  <p className="font-semibold">

                    {user?.email}

                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-4">

                <Phone className="text-indigo-600" />

                <div className="w-full">

                  <p className="text-sm text-gray-500">

                    Phone

                  </p>

                  {

                    editing ?

                    (

                      <input

                        value={phone}

                        onChange={(e)=>setPhone(e.target.value)}

                        className="w-full border rounded-xl px-4 py-2 mt-1"

                      />

                    )

                    :

                    (

                      <p className="font-semibold">

                        {phone || "Not Added"}

                      </p>

                    )

                  }

                </div>

              </div>

              {/* Institution */}

              <div className="flex gap-4">

                <GraduationCap className="text-indigo-600" />

                <div className="w-full">

                  <p className="text-sm text-gray-500">

                    Institution

                  </p>

                  {

                    editing ?

                    (

                      <input

                        value={institution}

                        onChange={(e)=>setInstitution(e.target.value)}

                        className="w-full border rounded-xl px-4 py-2 mt-1"

                      />

                    )

                    :

                    (

                      <p className="font-semibold">

                        {institution || "Not Added"}

                      </p>

                    )

                  }

                </div>

              </div>

            </div>

          </div>



          {/* Right Side */}

          <div className="space-y-7">

            {/* Skills */}

            <div className="bg-white rounded-3xl border shadow-sm p-7">

              <h2 className="text-2xl font-bold mb-5">

                Skills

              </h2>

              {

                editing ?

                (

                  <textarea

                    rows={4}

                    value={skills}

                    onChange={(e)=>setSkills(e.target.value)}

                    className="w-full border rounded-xl p-4"

                    placeholder="React, Node.js, Python"

                  />

                )

                :

                (

                  <div className="flex flex-wrap gap-3">

                    {

                      skills ?

                      skills.split(",").map(

                        (skill,index)=>

                        (

                          <span

                            key={index}

                            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium"

                          >

                            {skill.trim()}

                          </span>

                        )

                      )

                      :

                      <p className="text-gray-500">

                        No skills added

                      </p>

                    }

                  </div>

                )

              }

            </div>


            {/* Account Info */}

            <div className="bg-white rounded-3xl border shadow-sm p-7">

              <h2 className="text-2xl font-bold mb-6">

                Account Information

              </h2>

              <div className="space-y-6">

                <div className="flex justify-between">

                  <div className="flex gap-3">

                    <Shield className="text-indigo-600" />

                    <span>

                      Role

                    </span>

                  </div>

                  <span className="font-semibold capitalize">

                    {user?.role?.replace("_"," ")}

                  </span>

                </div>

                <div className="flex justify-between">

                  <div className="flex gap-3">

                    <Calendar className="text-indigo-600" />

                    <span>

                      Joined

                    </span>

                  </div>

                  <span className="font-semibold">

                    {

                      user?.createdAt ?

                      new Date(user.createdAt).toLocaleDateString()

                      :

                      "-"

                    }

                  </span>

                </div>

                <div className="flex justify-between">

                  <div className="flex gap-3">

                    <Code className="text-indigo-600" />

                    <span>

                      Status

                    </span>

                  </div>

                  <span className="font-semibold text-green-600">

                    Active

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}