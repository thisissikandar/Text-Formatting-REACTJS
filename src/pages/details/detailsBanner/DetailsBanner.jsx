import React from 'react'
import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const DetailsBanner = ({ video , crew }) => {

    const {mediaType , id} = useParams()
    const {data , loading} = useFetch(`/${mediaType}/${id}`) 
     
    const toHoursAndMinutes = (totalMinutes) =>{
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
    };

  return (
    <div className='detailsBanner'>
        {!loading ?(
            <div>Details Content .....</div>
        ):(
            <div className="detailsBannerSkeleton">
                <ContentWrapper>
                    <div className="left skeleton">
                    </div>
                    <div className="right">
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                        <div className="row skeleton"></div>
                    </div>
                </ContentWrapper>
            </div>
        )}
    </div>
  )
}

export default DetailsBanner