import { useEffect, useState } from 'react';

// everytime we set up an eventhandler inside a component, it's sign to use useEffect hook


const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        };

        window.addEventListener('popstate', onLocationChange);

        // cleanup function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []) //only run one time when component is rendered

    return currentPath === path
    ? children
    : null;
};



export default Route;