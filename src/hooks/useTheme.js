import { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';

const useTheme = (defaultTheme = { mode: `dark` }) => {

    const [theme, _setTheme] = useState(getInitialTheme)

    function getInitialTheme() {
        const isReturningUser = "theme" in localStorage;

        const preferredTheme = storage.getItem('theme')

        return isReturningUser
            ? JSON.parse(preferredTheme)
            : defaultTheme
    }

    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    const setTheme = ({ setTheme, ...theme }) => _setTheme(theme)

    return [theme, setTheme]
}

export default useTheme;
