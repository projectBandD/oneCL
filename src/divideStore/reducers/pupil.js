import produce from 'immer';

const initialState = {
    pupils: [
        { name: 'Dasi', id: '255496621' },
        { name: 'Tami', id: '452132145' },
        { name: 'Shoshi', id: '522144362' }
    ]
}

export default reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_PUPIL':
            { state.pupils.push(action.payLoad) }
            break;
        case 'UPDATE_PUPIL':
            { state.pupils.find(x => x.id == action.payLoad.id).name = action.payLoad.name }
            break;
        case 'DELETE':
            {
                state.pupils.filter(r => r.id != action.payLoad)//נשלח קוד שאותו נרצה למצוא ולמחוק
            }
            break;
    }

}, initialState)


