
export function Cards({image, header, description}){
    return(
        <div className="nft">
            <div className='main'>
            <img className='tokenImage' src={image} alt="NFT" />
            {/* <h2>{header}</h2>
            <p className='description'>{description}</p>
            <hr /> */}
            </div>
        </div>
    );
}


