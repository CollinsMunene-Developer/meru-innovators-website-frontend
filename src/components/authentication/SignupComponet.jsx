import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { z } from "zod";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Check, X} from 'lucide-react'

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Github, Googleimg } from "../../assets/images/Icons/Icons";
// Define form schema using zod
const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
    yearOfStudy: z.string().min(1, "Please select your year of study"),
    course: z.string().min(2, "Please select your course"),
    community: z.string().min(2, "Please select your tech community"),
    gender: z.string().min(1, "Please select your gender"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignupComponent = () => {
  const [value, setValue] = useState()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      course: "",
      yearOfStudy: "",
      gender: "",
    },
    mode: "onChange", // Live validation
  });

    // Password validation checks
    const passwordChecks = {
      length: (password) => password.length >= 8,
      uppercase: (password) => /[A-Z]/.test(password),
      lowercase: (password) => /[a-z]/.test(password),
      number: (password) => /[0-9]/.test(password),
      special: (password) => /[^A-Za-z0-9]/.test(password),
    };
    const ValidationStatus = ({ isValid }) => (
      isValid ? (
        <Check className="h-4 w-4 text-green" />
      ) : (
        <X className="h-4 w-4 text-red-500" />
      )
    );

  const handleFormSubmit = async (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...form}>
      
      <div className="w-full h-screen flex items-center justify-center">
        <Card className="w-full max-w-4xl p-6">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              Must Innovation Club
            </CardTitle>
            <p className="text-gray-500 mt-2">
              Provide the required information to create an account.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <div className=" grid grid-cols-3 gap-4">
                {/* First Name Field */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Username Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Add other fields similarly */}
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder=" Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        defaultCountry="KE"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder=" Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <div className="space-y-2 mt-2 justify-center flex">
                    <div className="flex items-center gap-8">
                      <ValidationStatus isValid={passwordChecks.length(field.value)} />
                      <span className="text-sm">At least 8 characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ValidationStatus isValid={passwordChecks.uppercase(field.value)} />
                      <span className="text-sm">One uppercase letter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ValidationStatus isValid={passwordChecks.lowercase(field.value)} />
                      <span className="text-sm">One lowercase letter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ValidationStatus isValid={passwordChecks.number(field.value)} />
                      <span className="text-sm">One number</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ValidationStatus isValid={passwordChecks.special(field.value)} />
                      <span className="text-sm">One special character</span>
                    </div>
                  </div>
                  
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder=" Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-4 gap-6">
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Of Study</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role in technology" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="computerScience">
                            Computer Science
                          </SelectItem>
                          <SelectItem value="informationTechnology">
                            Information Technology
                          </SelectItem>
                          <SelectItem value="softwareEngineering">
                            Software Engineering
                          </SelectItem>
                          <SelectItem value="electricalEngineering">
                            Electrical Engineering
                          </SelectItem>
                          <SelectItem value="mechanicalEngineering">
                            Mechanical Engineering
                          </SelectItem>
                          <SelectItem value="civilEngineering">
                            Civil Engineering
                          </SelectItem>
                          <SelectItem value="dataScience">
                            Data Science
                          </SelectItem>
                          <SelectItem value="artificialIntelligence">
                            Artificial Intelligence
                          </SelectItem>
                          <SelectItem value="businessAdministration">
                            Business Administration
                          </SelectItem>
                          <SelectItem value="economics">Economics</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="medicine">Medicine</SelectItem>
                          <SelectItem value="nursing">Nursing</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                          <SelectItem value="law">Law</SelectItem>
                          <SelectItem value="agriculture">
                            Agriculture
                          </SelectItem>
                          <SelectItem value="environmentalScience">
                            Environmental Science
                          </SelectItem>
                          <SelectItem value="architecture">
                            Architecture
                          </SelectItem>
                          <SelectItem value="mathematics">
                            Mathematics
                          </SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="community"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tech Community</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Tech Community" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="webDevelopment">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobileDevelopment">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="softwareEngineering">
                            Software Engineering
                          </SelectItem>
                          <SelectItem value="dataScience">
                            Data Science
                          </SelectItem>
                          <SelectItem value="artificialIntelligence">
                            Artificial Intelligence
                          </SelectItem>
                          <SelectItem value="machineLearning">
                            Machine Learning
                          </SelectItem>
                          <SelectItem value="cloudComputing">
                            Cloud Computing
                          </SelectItem>
                          <SelectItem value="cyberSecurity">
                            Cybersecurity
                          </SelectItem>
                          <SelectItem value="devOps">DevOps</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="gameDevelopment">
                            Game Development
                          </SelectItem>
                          <SelectItem value="augmentedReality">
                            Augmented Reality (AR)
                          </SelectItem>
                          <SelectItem value="virtualReality">
                            Virtual Reality (VR)
                          </SelectItem>
                          <SelectItem value="iot">
                            Internet of Things (IoT)
                          </SelectItem>
                          <SelectItem value="uiUxDesign">
                            UI/UX Design
                          </SelectItem>
                          <SelectItem value="robotics">Robotics</SelectItem>
                          <SelectItem value="quantumComputing">
                            Quantum Computing
                          </SelectItem>
                          <SelectItem value="bioinformatics">
                            Bioinformatics
                          </SelectItem>
                          <SelectItem value="hardwareEngineering">
                            Hardware Engineering
                          </SelectItem>
                          <SelectItem value="databaseManagement">
                            Database Management
                          </SelectItem>
                          <SelectItem value="bigData">Big Data</SelectItem>
                          <SelectItem value="eCommerce">E-Commerce</SelectItem>
                          <SelectItem value="productManagement">
                            Product Management
                          </SelectItem>
                          <SelectItem value="digitalMarketing">
                            Digital Marketing
                          </SelectItem>
                          <SelectItem value="technicalWriting">
                            Technical Writing
                          </SelectItem>
                          <SelectItem value="openSourceContributions">
                            Open Source Contributions
                          </SelectItem>
                          <SelectItem value="networkEngineering">
                            Network Engineering
                          </SelectItem>
                          <SelectItem value="ethicalHacking">
                            Ethical Hacking
                          </SelectItem>
                          <SelectItem value="aiEthics">AI Ethics</SelectItem>
                          <SelectItem value="naturalLanguageProcessing">
                            Natural Language Processing (NLP)
                          </SelectItem>
                          <SelectItem value="autonomousVehicles">
                            Autonomous Vehicles
                          </SelectItem>
                          <SelectItem value="3dModeling">
                            3D Modeling
                          </SelectItem>
                          <SelectItem value="edgeComputing">
                            Edge Computing
                          </SelectItem>
                          <SelectItem value="renewableEnergyTech">
                            Renewable Energy Technology
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Rather not Say</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Study</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year of study" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">1^st year</SelectItem>
                          <SelectItem value="female"> 2^nd year</SelectItem>
                          <SelectItem value="other"> 3^rd year </SelectItem>
                          <SelectItem value="other"> 4^th year </SelectItem>
                          <SelectItem value="other"> 5^th year </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-12 ml-72 rounded items-center justify-center flex"
              >
                Submit
              </button>
              <span className="flex gap-4 justify-end" > Already have an account? <a href="/login" className="text-orange-400">Login</a> </span>
            </form>

          </CardContent>
          <span className="flex items-center justify-center" >OR</span>
          <div className="items-center flex flex-col gap-4 ">
              <button className="w-72 flex h-10 gap-4 bg-white text-orange-400 rounded-md"> <img src={Googleimg} style={{width:'30px', height:"30px"}} alt="google img" /> Continue With Google</button>
              <button className="w-72 flex gap-4  h-10 text-black rounded-md" > <img src={Github} style={{width:'30px', height:"30px"}}  alt="" /> Continue With Github </button>
            </div>
        </Card>
      </div>
    </FormProvider>
  );
};  

export default SignupComponent;
