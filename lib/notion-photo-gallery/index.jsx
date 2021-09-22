import { addItem, readContents, readPropertyList } from './database.js'
import ReactImageGallery from 'react-image-gallery'
//addItem("TEST")
export async function getFileLinks() {
return readPropertyList('Upload')
  .then((list) => {
    return list.map((item) => {
      if (item.files[0]) {
        return item.files[0]
      }
    }).filter(Boolean)
  })
  .then((fileList)=>{
    console.log('===FILES===')
    return fileList.map((file) => {
        if(file.type == 'external' || file.type == 'file') {
            return file[file.type].url;
        }
    })   
  })
}

