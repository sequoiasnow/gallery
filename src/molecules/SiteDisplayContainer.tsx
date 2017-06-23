import Box from '../atoms/Box'

const SiteDisplayContainer: React.SFC<void> = ({ children }) => (
  <Box css={theme => ({
      flexDirection: 'row', 
    })}>
    {children}
  </Box>
)
export default SiteDisplayContainer
