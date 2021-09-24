import { getFileLinks } from 'lib/notion-photo-gallery'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {PageHeader} from 'components/PageHeader'
import {Footer} from 'components/Footer'
import Image from 'next/image'
export async function getStaticProps() {
    const imagesList = await getFileLinks();
    const filteredList = [...new Set(imagesList)];
    const props = {images:filteredList}
    console.log(filteredList)
    return { props, revalidate: 10 }
}
const PhotoGallery = (props) => {
  console.log(props.images)
  return (<div className="dark-mode notion notion-app">
  
    <PageHeader className="notion-header"></PageHeader>
    <ResponsiveMasonry className="notion-page notion-full-width">
    <Masonry columns={6} columnWidth={300} gutter="4px" style={{marginTop:"calc(2*var(--notion-header-height))"}}>
      {props.images.map((image, i) => (
        <div className="pg-unset-img">
                    <Image
                        key={i}
                        src={image}
                        placeholder='blur'
                        blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPs3af1n4EIwDiqkL4KAWZSGJNZxs8uAAAAAElFTkSuQmCC"}
                        layout="fill" 
                        className="pg-custom-img"                       
                    /></div>))}
    </Masonry>
    <Footer></Footer>
    </ResponsiveMasonry>

    </div>
  )
}
export default PhotoGallery
