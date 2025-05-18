import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../dummydata/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log("Google login success", response.access_token);
      login(response.access_token);
      navigate('/');
    },
    onError: (error) => {
      console.error(" Google login failed:", error);
    },
    scope: 'https://www.googleapis.com/auth/fitness.activity.read ',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">🏋️‍♀️ TrackFit</h2>
        <p className="text-gray-600 mb-6">Track your fitness journey across platforms.</p>

        <button
          onClick={() => googleLogin()}
          className="flex items-center justify-center w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none transition duration-150"
        >
           Log in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;