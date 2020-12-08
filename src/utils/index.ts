
export const allImagesLoaded = (elements: HTMLImageElement[]): Promise<any> =>
	Promise.all(Array.from(elements).map(img => new Promise(resolve => {
		if (img.complete) {
      resolve()
    } else {
      const onLoad = () => {
        resolve()
        img.removeEventListener('load', onLoad)
      }
      img.addEventListener('load', onLoad)
    }
})))


