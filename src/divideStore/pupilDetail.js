import React, { useRef } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        pupils: state.pupil.pupils,
    };
}


export default connect(mapStateToProps)(function PupilDetails(props) {
    const { pupils, dispatch } = props;

    return (
        <>
            <ul>
                {pupils.map(item => <li key={item.id}>name:{item.name}</li>)}
            </ul>
        </>
    )

})
