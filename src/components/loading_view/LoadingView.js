
import React, { useState, useRef, useEffect } from 'react';

import * as S from './style';
import PropTypes from 'prop-types';

import useAxios from 'axios-hooks';


function LoadingView({ url, successView }) {
    const [isError, setIsError] = useState(false);

    const [{ data, loading, error, response }, refetch] = useAxios(url);

    useEffect(() => {
        console.log(`LoadingView.useEffect, error: ${error}`)
      }, [loading]);

    return (
        <>
            <S.Center>
                <S.AnimatedVisibility visible={loading}>
                    <S.CircularLoader />
                </S.AnimatedVisibility>

                <S.AnimatedVisibility visible={error != undefined}>
                    <p>Error Loading Content!</p>
                </S.AnimatedVisibility>

                <S.AnimatedVisibility visible={!loading && error == undefined}>
                    {successView({ data: data })}
                </S.AnimatedVisibility>
            </S.Center>
        </>
    );

}

LoadingView.propTypes = {
    url: PropTypes.string.isRequired,
    successView: PropTypes.func.isRequired,
}

export default LoadingView