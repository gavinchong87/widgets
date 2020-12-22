import React from 'react';

const Link = ({ href, className, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return; // let browser do their normal thing instead of preventDefault below.
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // the below code is to tell the dropdown components that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link;
