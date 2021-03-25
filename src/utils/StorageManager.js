const KEY_ITINERARY = 'itinerary';
const KEY_THEME = 'theme';
const KEY_HOME = 'home';

export const addToItinerary = (destination) => {
    const itinerary = getItinerary();
    itinerary.push(destination);
    localStorage.setItem(KEY_ITINERARY, JSON.stringify(itinerary));
}

export const getItinerary = () => {
    const itinerary = localStorage.getItem(KEY_ITINERARY);
    return [...(itinerary === null ? [] : JSON.parse(localStorage.getItem(KEY_ITINERARY)))]
}

export const getTheme = () => {
    const theme = localStorage.getItem(KEY_THEME);
    return theme ===null || theme === undefined  ? 'maldives' : theme;
}

export const setTheme = (theme) => {
    localStorage.setItem(KEY_THEME, theme.id);
}

export const getHome = () => {
    const home = localStorage.getItem(KEY_HOME);
    return home === null || home === undefined ? null : JSON.parse(home);
}

export const setHome = (home) => {
    localStorage.setItem(KEY_HOME, JSON.stringify(home));
}