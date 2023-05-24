import produce from 'immer';

const initialState = {
    teacher: { name: 'Batya', faily: 'Levi', id: '122355465' }
};

export default reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_TECHER_NAME': { state.teacher.name = action.payLoad }
            break;
        case 'SET_TEACHER_FAMILY': { state.teacher.faily = action.payLoad }
    }

}, initialState)
