import CoverSection from './components/CoverSection'
import Part1Logo from './components/Part1Logo'
import Part2Colors from './components/Part2Colors'
import Part3Typography from './components/Part3Typography'
import Part4DosAndDonts from './components/Part4DosAndDonts'
import Part5Digital from './components/Part5Digital'
import BrandFooter from './components/BrandFooter'

export default function App() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#f5f5f5', color: '#191919', overflowX: 'hidden' }}>
      <CoverSection />
      <Part1Logo />
      <Part2Colors />
      <Part3Typography />
      <Part4DosAndDonts />
      <Part5Digital />
      <BrandFooter />
    </div>
  )
}
