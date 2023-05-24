import produce from 'immer';
//הסטור עובד על הנתונים הממסד נתונים
//פה שומרים מה שהגיע מהמסד נתונים
//כאן שומרים דברים שצריך לשתי קומפוננטות או יותר

//הגדרת משתנים
//initialState - המצב הראשוני
const initialState = {
    // listOfUser: [
    // ],
    currentUser:{},
    array:[]

}

//הפונקציה שמעדכנת את הנתונים למעלה 
const reducer = produce((state, action) => {
    switch (action.type) {
        //יצירת משתמש חדש - שימרת המשתמש הנוכחי 
        case 'CURRENT_USER':
            { state.user=action.payLoad }
            break;
        //     //מציאת משתמש ע"י שם משתמש וסיסמא
        // case 'FIND_USER_BY_NAME_AND_PASS':
        //     { state.users.find(user => user.id == action.payLoad.id).name }
        //     break;
        //     //עדכון משתמש
        // case 'UPDATE_USER':
        //     { state.users.find(user => user.id == action.payLoad.id).name = action.payLoad.name }
        //     break;
 


    }

}, initialState)

export default reducer;