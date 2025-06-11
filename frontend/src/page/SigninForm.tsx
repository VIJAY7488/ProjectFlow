import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


interface formData {
    email: string,
    password: string
};

interface FormErrors {
    email: string,
    password: string
};

const SigninForm = () => {

    const [formData, setFormData] = useState<formData>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<FormErrors>({
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if(!formData.email.trim()){
            newErrors.email = 'Email is required';
            isValid = false;
        }
        else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(formData.email)){
                newErrors.email = 'Please enter a valid email address ';
                isValid = false;
            };
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validateForm()){
            try {
               console.log('Form Data ', formData);

               setFormData({email: '', password: ''});
               setErrors({email: '', password: ''});
            } catch (error) {
              console.error('Submission error:', error);
            } finally {
              setIsLoading(false)
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
        setErrors(prev => ({...prev, [name]: ''}));
    }
  return (
    <div>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-b from-slate-950 to-slate-900'>
        <div className='container mx-auto px-4 py-16'>
            <div className='max-w-md mx-auto bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border-slate-700/50'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent'>
                        Welcome Back
                    </h2>
                    <p className='text-gray-400 mt-2'>
                        Sign in to continue with ProjectFlow
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='space-y-2'>
                                <div className='relative'>
                                    <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <input
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email Address'
                                        className={`w-full pl-10 pr-4 py-2 bg-slate-800/50 border ${
                                            errors.email ? 'border-red-500' : 'border-slate-600'
                                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                                    />
                                </div>
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>

                            <div className='space-y-2'>
                                <div className='relative'>
                                    <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                    <input
                                        type="password"
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Password'
                                        className={`w-full pl-10 pr-4 py-2 bg-slate-800/50 border ${
                                            errors.password ? 'border-red-500' : 'border-slate-600'
                                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                                    />
                                </div>
                                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                            </div>

                            <div className='flex items-center justify-between'>
                                <label className='flex items-center'>
                                    <input type='checkbox' className='w-4 h-4 rounded border-slate-600 bg-slate-800/50 text-sky-500 focus:ring-sky-500' />
                                    <span className='ml-2 text-sm text-gray-400'>Remember me</span>
                                </label>
                                <Link to='/forgot-password' className='text-sm text-sky-400 hover:text-sky-300'>
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type='submit'
                                className='w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200'
                            >
                                Sign In
                            </button>
                        </form>

                        <p className="mt-6 text-center text-gray-400">
                            Don't have an account?{' '}
                            <Link to="/signup" onClick={() => window.scrollTo({top: 0,left: 0, behavior: 'smooth'})} className="text-sky-400 hover:text-sky-300">
                                Sign up
                            </Link>
                        </p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default SigninForm
