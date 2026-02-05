import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 text-center">
                    <div className="max-w-md w-full">
                        <div className="bg-red-100 text-red-700 p-6 rounded-2xl shadow-lg border border-red-200">
                            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                            <p className="mb-6">
                                予期せぬエラーが発生しました。ページを更新するか、後ほどもう一度お試しください。
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md"
                            >
                                Reload Page / ページを更新
                            </button>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <pre className="mt-8 text-left p-4 bg-gray-800 text-gray-200 text-xs rounded-xl overflow-auto max-h-64">
                                {this.state.error && this.state.error.toString()}
                            </pre>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
