// components/Auth/RegisterForm.js
import { useState } from 'react';
import AnimatedButton from '../shared/AnimateButton';
import PropTypes from 'prop-types';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';

export default function RegisterForm({ onSuccess, onLoginClick }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'password') {
            let strength = 0;
            if (value.length > 0) strength += 1;
            if (value.length >= 8) strength += 1;
            if (/[A-Z]/.test(value)) strength += 1;
            if (/[0-9]/.test(value)) strength += 1;
            if (/[^A-Za-z0-9]/.test(value)) strength += 1;
            setPasswordStrength(strength);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        setIsLoading(true);

        try {
            // await authService.register(formData);
            onSuccess();
        } catch (err) {
            setError(err.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    const getPasswordStrengthColor = () => {
        switch (passwordStrength) {
            case 0: return 'bg-gray-200';
            case 1: return 'bg-red-500';
            case 2: return 'bg-yellow-500';
            case 3: return 'bg-blue-500';
            case 4: 
            case 5: return 'bg-green-500';
            default: return 'bg-gray-200';
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-500 mt-2">Join our community</p>
            </div>

            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-red-700">{error}</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="your name"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="mt-1">
                        <div className="flex h-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div 
                                    key={i}
                                    className={`flex-1 mx-0.5 rounded-full ${
                                        passwordStrength >= i ? getPasswordStrengthColor() : 'bg-gray-200'
                                    }`}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {passwordStrength < 2 ? 'Weak' : passwordStrength < 4 ? 'Medium' : 'Strong'}
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiCheck className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                            I agree to the{' '}
                            <button type="button" className="text-blue-600 hover:text-blue-500">
                                Terms of Service
                            </button>{' '}
                            and{' '}
                            <button type="button" className="text-blue-600 hover:text-blue-500">
                                Privacy Policy
                            </button>
                        </label>
                    </div>
                </div>

                <div>
                    <AnimatedButton
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                        isLoading={isLoading}
                    >
                        Create Account
                    </AnimatedButton>
                </div>
            </form>

            <div className="text-center text-sm">
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                        type="button"
                        className="font-medium text-blue-600 hover:text-blue-500 transition duration-200"
                        onClick={onLoginClick}
                    >
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
}

RegisterForm.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired
};