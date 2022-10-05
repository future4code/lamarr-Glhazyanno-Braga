export function DetailsPage(){
    const {characters , id} = props
    const character = characters.filter(char =>)
    
    return(
        <>
         <Header/>
         <div>
            <h2>{character.name} </h2>
            <img>{character.img}</img>
            <p>{}</p>
         </div>
        </>

    )
}