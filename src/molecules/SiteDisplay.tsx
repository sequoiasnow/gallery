import Box from '../atoms/Box'
import Text from '../atoms/Text'
import * as marked from 'marked'

interface SiteDisplayProps {
  content: string,
  images: string[],
  selected?: boolean
}

const Image: React.SFC<{ url: string, pointer?: boolean }> = ({ url, pointer }) => (
  <Box as="img" src={url} css={theme => ({
      width: '100%',
      height: 'auto', 
      marginBottom: 1,
      ...(pointer ? { cursor: 'pointer' } : {})
    })}/> 
)

const SiteDisplay: React.SFC<SiteDisplayProps> = ({ content, images, selected }) => {
  const html = marked(content)

  return (
    <Box width="100%" maxWidth="100vw"> 
      <Image url={images[0]} pointer />
      <Box css={theme => ({
          transition: 'opacity 0.4s',
          opacity: selected ? 1 : 0, 
        })}>
        <Text dangerouslySetInnerHTML={{__html: html}} css={theme => ({
            padding: 1.5,
            color: theme.colors.white, 
            fontFamily: theme.text.fontFamily, 
          })} />
        {images.slice(1).map((image, i) => <Image url={image} />)}
      </Box>
  </Box>
  ) 
}
export default SiteDisplay
