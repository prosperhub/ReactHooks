let Join = ({ item, manageState, setItems }) =>{
    return(
        <div>
            <form onSubmit={
                (event) =>{
                event.preventDefault();
                manageState();
                }
            }>
                <input type="text" />
                <input type="text" value={item} onChange={(e) => setItems(e.target.g)}/>
                <button type="submit">login</button>
            </form>
        </div>
    );
} 

export default Join;
