import { getFileLinks } from 'lib/notion-photo-gallery'
import Masonry from 'react-responsive-masonry'
export async function getStaticProps() {
    const imagesList = await getFileLinks();
    const props = {images:imagesList}
    return { props, revalidate: 10 }
}
const PhotoGallery = (props) => {
  return (
    <Masonry columns={6} gutter="4px">
      {props.images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />))}
    </Masonry>
  )
}
export default PhotoGallery
