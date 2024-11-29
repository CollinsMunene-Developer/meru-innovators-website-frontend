import React from 'react'
import SignupComponet from '../../../components/authentication/SignupComponet'
import { Logo } from '../../../assets/brand/brand'

const Signup = () => {
  return (
    <div className='w-full h-screen justify-center container flex '>
      <div className="    ">
        <img src={Logo} alt="" style={{width: "30px", height:"30px"} } />
      </div>

      <div className="">
      <SignupComponet />
      </div>

    </div>
  )
}

export default Signup