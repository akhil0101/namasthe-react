import CategoryListItems from "./CategoryListItems"
const RestuarantCategory = ({data ,showitem,setCurrActive}) => {
     return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            {/* header */}
                <div className="flex justify-between cursor-pointer" onClick={()=>setCurrActive()}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length })</span>
                    <div>⬇️</div>
                </div>
                {/* accordion*/}
                {showitem && <CategoryListItems items={data.itemCards}/>}
            </div>
        </div>
     )
}

export default RestuarantCategory