import LogoAqua from '../assets/logo-full-aqua.svg';
import LogoSunset from '../assets/logo-full-sunset.svg';

import MarkerMaldives from '../assets/icons/marker-maldives.svg';
import MarkerCalifornia from '../assets/icons/marker-california.svg';

const themes = {
    'california': {
        id: 'california',
        label: 'California',
        markerFileName: 'marker-california.svg',
        logo: LogoSunset,
        gradient: 'gradient-california',
        primary: '#FDA601',
        button: 'button-california'
    },
    'maldives': {
        id: 'maldives',
        label: 'Maldives',
        markerFileName: 'marker-maldives.svg',
        logo: LogoAqua,
        gradient: 'gradient-maldives',
        primary: '#2D9CDB',
        button: 'button-maldives'
    }
};

export const getThemeById = (themeId) => {
    return themes[themeId];
}

export default themes;