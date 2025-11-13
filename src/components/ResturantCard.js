import { IMG_CDN_URL } from '../service/constants';
const ResturantCard=({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  avgRatingString,
}) =>{
  return(
    
    <div className ="m-4 p-4 w-[200px] bg-gray-50 hover:bg-gray-200 rounded-lg h-auto">
      <img className="rounded-lg" alt="res.log" src={IMG_CDN_URL + cloudinaryImageId} />
    <h4 className='font-bold py-2 text-lg'>{name}</h4>
    <h4>{cuisines.join(
      ' '
    )}</h4>
    <h5>{avgRatingString} stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export const withPromotedLabel =(ResturantCard)=>{
  return (props)=> {
      return (
        <div>
          <label className='absolute bg-black text-white m-2 p-2 rounded-lg'> promoted</label>
          <ResturantCard {...props}/>
        </div>
      )
  }
}

export default ResturantCard;