import { Carousel } from 'react-carousel-minimal';


const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

const Carouselul = (images) => {

  const data = [
    {
      image:images.images.pic1,
      caption:""
    },
    {
      image:images.images.pic2,
      caption: ""
    },
    {
      image:images.images.pic3,
      caption: ""
    }
    
  ];
  console.log(images.images.pic1)

  return(
<div className="App pt-20">
      <div style={{ textAlign: "center" }}>
        
        <div className="" style={{
          
        }}>
          <Carousel
            data={data}
            time={4000}
            width="200rem"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
        
          />
        </div>
      </div>
    </div>
  )
}
export default Carouselul;