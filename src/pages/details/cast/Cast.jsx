import React from 'react'
import "./style.scss"
import { useSelector } from 'react-redux';
import avatar from "../../../assets/avatar.png";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Images from './../../../components/lazyLoadImages/Images';



const Cast = ({ data , loading}) => {
    const {url} = useSelector((state) =>state.home)
    const  skeleton = () =>{
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="circle skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        )
    }
  return (
    <div className='castSection'>
        <ContentWrapper>
            <div className="sectionHeading">Top Cast</div>
            {!loading ? (
                <div className="listItems">
                    {data?.map((item)=> {
                        let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar
                        return (
                            <div key={item.id} 
                            className='listItem'>
                                <div className="profileImg">
                                    <Images src={imgUrl}/>
                                </div>
                                <div className="name">
                                    {item.name}
                                </div>
                                <div className="character">
                                    {item.character}
                                </div>
                            </div>
                        )
                    })}
                </div>
            ):(
                <div className="castSkeleton">
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                </div>
            )}

        </ContentWrapper>
    </div>
  )
}

export default Cast