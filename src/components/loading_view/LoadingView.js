
import React, { useState, useRef, useEffect} from 'react';

import * as S from './style';
import PropTypes from 'prop-types';

import useAxios from 'axios-hooks';
import ExpandableView from '../expandable/ExpandableView';


function LoadingView({ url, successView }) {
    const [isError, setIsError] = useState(false);

    const [{ data, loading, error, response }, refetch] = useAxios(url);

    useEffect(() => {

        console.log(`LoadingView, data: ${JSON.stringify(error, null, 2)}`)
        console.log(`LoadingView, loading: ${loading}`)
        console.log(`LoadingView, response: ${response}`)

        console.log(`LoadingView, response.data: ${JSON.stringify(response?.data, null, 2)}`)
        // console.log(`typeof url: ${typeof props.url}`)
      }, [loading,]);

    return (
        <>
            <S.Center>
                <S.AnimatedVisibility visible={loading}>
                    <S.CircularLoader />
                </S.AnimatedVisibility>

                {/* { _data } */}

                <S.AnimatedVisibility visible={!loading}>
                    {/* {(<>SuccessView()</>)} */}
                    {/* {(<>{() => SuccessView ({data: {}})}</>)} */}
                    {/* {(<><successView /></>)} */}
                    {/* {(<>{successView}</>)} */}
                    {/* {(<>{props.successView({data: () => {'a1'}})}</>)} */}
                    {(<>{successView({data: response?.data})}</>)}
                    {/* {(<>{successView({data: ()=>{'a1'})}</>)} */}
                    {/* {<SuccessView data={() => {'a1'}}/>} */}
                    {/* {(<><SuccessView /></>)} */}
                    {/* <><SuccessView data={() => {'a1'}}/></> */}
                    {/* <successView data={() => {}}/> */}
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