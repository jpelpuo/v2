import { useEffect, useState } from 'react';
import { scrollDirection } from '../config';

const useScrollDirection = (initialDirection) => {
    const [scrollDir, setScrollDir] = useState(initialDirection);


    useEffect(() => {
        let lastScrollPos = window.pageYOffset;

        const updateScrollDirection = () => {
            const currentScrollPos = window.pageYOffset;

            setScrollDir(lastScrollPos > currentScrollPos ? scrollDirection.up : scrollDirection.down)
            lastScrollPos = currentScrollPos > 0 ? currentScrollPos : 0;
        }

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDirection);
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [initialDirection])

    return scrollDir
}

export default useScrollDirection;