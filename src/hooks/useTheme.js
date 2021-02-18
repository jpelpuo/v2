import { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';
import { themeMode } from '../config'

const useTheme = (defaultTheme = themeMode.dark) => {

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
    }, [theme]);

    return {
        ...theme,
        setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
    }
}

export default useTheme;
