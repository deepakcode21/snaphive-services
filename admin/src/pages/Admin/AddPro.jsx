import React from 'react';
import { assets } from '../../assets/assets';

const AddPro = () => {
  return (
    <form className='m-5 w-full flex justify-center'>
      <div className='bg-white px-5 py-5 border rounded-lg w-full max-w-4xl shadow-lg'>
        <p className='mb-3 text-xl font-semibold text-gray-800 text-center'>Add Professional</p>

        {/* Upload Professional Picture */}
        <div className='flex items-center gap-4 mb-5'>
          <label htmlFor='pro-img' className='cursor-pointer'>
            <img
              className='w-20 h-20 bg-gray-100 rounded-full object-cover border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all'
              src={assets.upload_area}
              alt='Upload Professional Picture'
            />
          </label>
          <input type='file' id='pro-img' className='hidden' />
          <div>
            <p className='text-gray-600 font-medium'>Upload Professional Picture</p>
            <p className='text-sm text-gray-400'>Recommended size: 200x200 pixels</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Column */}
          <div className='space-y-4'>
            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Professional Name</label>
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='text'
                placeholder='Name'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Professional Email</label>
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='email'
                placeholder='Email'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Professional Password</label>
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='password'
                placeholder='Password'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Experience</label>
              <select
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                required
              >
                {[...Array(15)].map((_, i) => (
                  <option key={i} value={`${i + 1} year`}>
                    {i + 1} year
                  </option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Visiting Fees</label>
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='number'
                placeholder='Fees'
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-4'>
            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Speciality</label>
              <select
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                required
              >
                <option value='Chef'>Chef</option>
                <option value='Barber'>Barber</option>
                <option value='Painter'>Painter</option>
                <option value='Plumber'>Plumber</option>
                <option value='Mechanic'>Mechanic</option>
                <option value='Carpenter'>Carpenter</option>
                <option value='Technician'>Technician</option>
              </select>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Education</label>
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='text'
                placeholder='Education'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-gray-700 font-medium'>Address</label>
              <input
                className='border rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='text'
                placeholder='Address Line 1'
                required
              />
              <input
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black'
                type='text'
                placeholder='Address Line 2'
              />
            </div>
          </div>
        </div>

        {/* About Professional */}
        <div className='mt-6'>
          <label className='text-gray-700 font-medium'>About Professional</label>
          <textarea
            className='w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
            placeholder='Write about the professional...'
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='mt-5 w-full lg:w-auto px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
        >
          Add Professional
        </button>
      </div>
    </form>
  );
};

export default AddPro;