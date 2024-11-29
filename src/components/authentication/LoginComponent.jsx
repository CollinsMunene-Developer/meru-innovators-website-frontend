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

  })


const LoginComponent = () => {
  const [value, setValue] = useState()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {

      email: "",
      password: "",

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
              Welcome back! Please enter your details.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>

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


              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-12 ml-72 rounded items-center justify-center flex"
              >
                Submit
              </button>
              <span className="flex gap-4 justify-end" > Dont have Account? <a href="/signup" className="text-orange-400">Register</a> </span>
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

export default LoginComponent;
