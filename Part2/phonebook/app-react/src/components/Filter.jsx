const Filter = ({eventChangeInput, setFindName, findName}) =>  
<div>
    filter shown with 
    <input value = {findName} onChange={(e) => eventChangeInput(e, setFindName)}/>
</div>

export default Filter