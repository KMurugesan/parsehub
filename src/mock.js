/* eslint-disable no-sparse-arrays */
export const myFilesCrumb = {
    id: 'myfiles',
    message: 'My Files',
    url: '/myFiles',
    children: {
        id: 'securedFiles',
        message: 'Secured Files',
        url: '/securedFiles'
    }
};

export const myNameCrumb = {
    id: 'myname',
    message: 'My Name',
    url: '/myName',
    children: {
        ...myFilesCrumb
    }
};

export const homeCrumb = {
    id: 'home',
    message: 'Home',
    url: '/home',
    children: {
        ...myNameCrumb
    }
};

export const mockBreadCrumbs = {
    'home': [{ ...homeCrumb }],
    'myname': [{ ...homeCrumb }, { ...myNameCrumb }],
    'myfiles': [{ ...homeCrumb }, { ...myNameCrumb }, { ...myFilesCrumb }]
}