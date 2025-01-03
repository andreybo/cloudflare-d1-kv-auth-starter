// src/pages/Error/index.jsx

import { Link } from "react-router-dom";
import { setTitle } from '../../utils/generalFunctions';

export const Error = (props) => {
    setTitle(`Error ${props.code}`);
    
    let message, subMessage;
    if(props.code === '404') {
        message = "Page not found.";
        subMessage = "The page you're looking for may have been moved, deleted or has never existed.";
    } else if(props.code === '403') {
        message = "Forbidden.";
        subMessage = "You do not have access to this page.";
    }

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <div className="px-4 border-r border-gray-400">
                        <Link to="/">
                            <img src="/logo-short.svg" alt="Logo" className="w-6" />
                        </Link>
                    </div>
                    <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        {props.code}
                    </div>
                    <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        {message || "Something went wrong"}
                    </div>
                </div>
            </div>
        </div>
    )
}
