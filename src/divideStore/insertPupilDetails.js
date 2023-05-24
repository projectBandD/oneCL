import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addPupil } from '../../actions';


export default connect(() => { })(function InsertPupilDetails(props) {
    const { dispatch } = props;
    const nameRef = useRef('');
    const idRef = useRef('');

    function insertPupil() {
        // זריקת אקשן והדיספצ תופס ומעביר לרדוסר המתאים בסטור
        dispatch(addPupil({ name: nameRef.current.value, id: idRef.current.value }))
    }

    return (
        <>
            <label>name:
            <input ref={nameRef} type="string"></input>
            </label>
            <label>id:
            <input ref={idRef} type="string"></input>
            </label>
            <button onClick={insertPupil}>insert pupil</button>
        </>
    )

})
