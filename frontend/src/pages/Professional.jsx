import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Professional = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { Professionals } = useContext(AppContext);
  const [filterPro, setFilterPro] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterPro(Professionals.filter((pro) => pro.speciality === speciality));
    } else {
      setFilterPro(Professionals);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Professionals, speciality]);

  return (
    <div className="text-gray-800 p-4">
      <p className="text-lg font-semibold mb-4">
        Browse through the professionals by specialty.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/*------------------------------ Right Side (Filter Section) ------------------------------*/}
        <div className="w-full sm:w-64 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4">Filter by Specialty</h3>
          <div className="flex flex-col gap-3">
            {[
              'Chef',
              'Barber',
              'Painter',
              'Plumber',
              'Mechanic',
              'Carpenter',
              'Technician',
            ].map((specialtyItem) => (
              <div
                key={specialtyItem}
                onClick={() =>
                  speciality === specialtyItem
                    ? navigate('/professional')
                    : navigate(`/professional/${specialtyItem}`)
                }
                className={`w-full px-4 py-2 rounded-md transition-all cursor-pointer ${
                  speciality === specialtyItem
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {specialtyItem}
              </div>
            ))}
          </div>
        </div>
          {/*------------------------------- Left Side ------------------------------*/}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 sm:px-0 pt-6">
            {
                filterPro.map((item, index) => (
                  <div
                    onClick={() => navigate(`/booking/${item._id}`)}
                    className="border-[1px] border-black rounded-xl overflow-hidden cursor-pointer shadow-[11px_10px_0px_rgba(0,0,0,0.85)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
                    key={index}
                  >
                    {/* Improved Image Handling */}
                    <div className="w-full h-48 md:h-56 overflow-hidden flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        src={item.image}
                        alt={item.name}
                        style={{ objectPosition: 'top center' }} // Ensure the face is centered
                      />
                    </div>
        
                    {/* Enhanced Card Content */}
                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-green-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <p className="text-sm">Available</p>
                      </div>
                      <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.speciality}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{item.rating || "4.5"}</span>
                        <span className="text-sm text-gray-400">({item.reviews || "100"} reviews)</span>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default Professional