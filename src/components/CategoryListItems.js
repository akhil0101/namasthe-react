
 import {ITEM_IMG_CDN_URL} from '../service/constants'
 const CategoryListItems = ({items})=>{
    console.log("items",items)
    return (<div>
        {items.map(item=>(
            <div key={item.card.info.id} className="p-2 m-2 border-grey-200 border-b-2 text-left">
                {/* <img className="w-14" src={ITEM_IMG_CDN_URL + item.card.info}/> */}
                <div className="py-2">
                    <span>
                       {item.card.info.name}
                    </span>
                    <span>
                    - ₹ {item.card.info.price / 100}
                    </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
        ))}
    </div>)
}


export default CategoryListItems