import React from 'react';
import useMovie from '../../Hooks/useMovie';
import { FaAngleDoubleRight } from 'react-icons/fa';

const PopulerMovies = () => {
    const { data: movies = [], isloading } = useMovie();

    return (
        <div>
            <h1 className='text-3xl font-semibold text-white flex items-center gap-3 mb-8'>Popular Movies <FaAngleDoubleRight /></h1>
            <div className='xl:grid grid-cols-6 gap-2'>

                {
                    movies.map((item, index) => (
                        <div className='h-[400px]'>
                            <img className='h-[80%] border-2 border-gray-400 rounded' src={item?.show?.image?.original} alt="" />
                            <div>
                                <p className='text-white pl-2 mt-2'>{item?.show?.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default PopulerMovies;