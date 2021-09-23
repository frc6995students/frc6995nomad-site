import { getFileLinks } from 'lib/notion-photo-gallery'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {PageHeader} from 'components/PageHeader'
import {Footer} from 'components/Footer'
export async function getStaticProps() {
    const imagesList = await getFileLinks();
    const filteredList = [...new Set(imagesList)];
    const props = {images:filteredList}
    return { props, revalidate: 10 }
}
const PhotoGallery = (props) => {
  return (<div className="dark-mode notion notion-app">
  
    <PageHeader className="notion-header"></PageHeader>
    <ResponsiveMasonry className="notion-page notion-full-width">
    <Masonry columns={6} gutter="4px" style={{marginTop:"calc(2*var(--notion-header-height))"}}>
      {props.images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />))}
    </Masonry>
    <Footer></Footer>
    </ResponsiveMasonry>

    </div>
  )
}
export default PhotoGallery
