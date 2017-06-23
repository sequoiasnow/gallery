import { renderRule } from './styles'
import currentTheme from './theme/current' 
import { ThemeProvider } from './atoms/Theme'
import Gallery from './oraganisms/Gallery'


export default () => (
    <ThemeProvider renderRule={renderRule} theme={currentTheme}>
      <div>
        <Gallery />
      </div> 
    </ThemeProvider>
)  
