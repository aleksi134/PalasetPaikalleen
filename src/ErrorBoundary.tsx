import { IonButton } from '@ionic/react'
import React from 'react'
import ResetButton from './components/ResetButton'
import './ErrorBoundary.scss'

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  reload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-boundary">
        <h2>Hups!</h2>

        <p> Jotain meni pieleen. Koita ensin ladata peli uudelleen.</p>
        <p> Jos ei auta, voit aloittaa alusta. </p>

        <div className="reload-button">
          <IonButton expand="block" onClick={this.reload}>Lataa uudelleen</IonButton>
        </div>
        <ResetButton />
      </div>
    }

    return this.props.children
  }
}


export default ErrorBoundary
