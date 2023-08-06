const getLocalImg = (fileName: string) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}

const getLocalVideo = (fileName: string) => {
  return new URL(`../assets/video/${fileName}`, import.meta.url).href
}

export { getLocalImg, getLocalVideo }
