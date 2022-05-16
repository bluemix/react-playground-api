
import React, { useState, useRef, useEffect} from 'react';

import * as S from './style';
import PropTypes from 'prop-types';

import useAxios from 'axios-hooks';
import ExpandableView from '../expandable/ExpandableView';


function LoadingView(props, { url, successView}) {
    const [isError, setIsError] = useState(false);

    const [{ data, loading, error, response }, refetch] = useAxios(url);

    useEffect(() => {
        // console.log(`this.children: ${props.children}`)
        console.log(`successView: ${ successView}`)
        console.log(`typeof successView: ${typeof successView}`)
      }, [data]);

    return (
        <>
            <S.Center>
                <S.AnimatedVisibility visible={loading}>
                    <S.CircularLoader />
                </S.AnimatedVisibility>

                <S.AnimatedVisibility visible={!loading}>
                    {/* {props.children} */}
                    {/* {successView(data)} */}
                    {successView }
                    {/* {callback} */}
                    {/* {callback} */}
                </S.AnimatedVisibility>
            </S.Center>
        </>
    );

}

LoadingView.propTypes = {
    url: PropTypes.string.isRequired,
    props: PropTypes.node,
    // children: PropTypes.node.isRequired,
    successView: PropTypes.func.isRequired,
    // callback: PropTypes.func.isRequired,
}

export default LoadingView