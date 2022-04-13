import styles from './App.module.css'
import LeftSide from './components/LeftSide'
import Divider from './helpers/Divider'
import RightSide from './components/RightSide'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1200px)'
  })

  return (
    <div className={styles.app}>
      <LeftSide user='USER' />
      {isDesktop && <Divider />}
      {isDesktop && <RightSide />}
    </div>
  )
}

export default App
