import { App } from 'app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { QueryClientProvider } from 'shared/providers'

import 'react-toastify/dist/ReactToastify.css'
import i18n from 'shared/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Theme preset={presetGpnDefault}>
            <App />
          </Theme>
        </I18nextProvider>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
)
