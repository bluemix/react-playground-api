
import React, { useState, useRef } from 'react';

import * as S from './style';
import PropTypes from 'prop-types';

import useAxios from 'axios-hooks';
import ExpandableView from '../expandable/ExpandableView';


function LoadingView({ url, successView, callback }) {
    const [isError, setIsError] = useState(false);

    const [{ data, loading, error, response }, refetch] = useAxios(url);

    return (
        <>
            <S.Center>
                <S.AnimatedVisibility visible={loading}>
                    <S.CircularLoader />
                </S.AnimatedVisibility>

                <S.AnimatedVisibility visible={!loading}>
                    {successView}
                </S.AnimatedVisibility>
            </S.Center>
        </>
    );

}

LoadingView.propTypes = {
    url: PropTypes.string.isRequired,
    successView: PropTypes.object.isRequired,
    callback: PropTypes.func.isRequired,
}

export default LoadingView