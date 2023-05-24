// users
export function updateClass(newClass) {
    return { type: 'UPDATE_CLASS', payLoad: newClass }
}

export function addPupil(newPuoil) {
    return { type: 'ADD_PUPIL', payLoad: newPuoil }
}

export function updatePupil(pupil) {
    return { type: 'UPDATE_PUPIL', payLoad: pupil }
}


// products