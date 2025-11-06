import {reslog_URL} from '../service/constants';

const ResturantCard=({resVal}) =>{
  return(
    
    <div className ="m-4 p-4 w-[200px] bg-gray-50 hover:bg-gray-200 rounded-lg h-auto">
      <img className="rounded-lg" alt="res.log" src={reslog_URL}></img>
    
    <h4 className='font-bold py-2 text-lg'>{resVal.info.name}</h4>
    <h4>{resVal.info.cuisines.join(
      ' '
    )}</h4>
    <h5>{resVal.info.avgRating} stars</h5>
      <h5>{resVal.info.sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default ResturantCard;