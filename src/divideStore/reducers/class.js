import produce from 'immer';

// הדגרת המשתנים
const initialState = {
    classGrade: 0,
    currentuser:{},
    AllCountries:[]

};

//הפונקציה שמעדכנת את הנתונים למעלה
export default reducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_CLASS':
            { state.classGrade = action.payLoad }
            break;
    }

}, initialState)
