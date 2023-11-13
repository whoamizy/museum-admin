import 'react-toastify/dist/ReactToastify.min.css'
import 'shared/styles/globals.scss'
import 'shared/styles/theme/_color/Theme_color_theme.scss'
import 'shared/styles/theme/_control/Theme_control_theme.scss'
import 'shared/styles/theme/_font/Theme_font_theme.scss'
import 'shared/styles/theme/_size/Theme_size_theme.scss'
import 'shared/styles/theme/_space/Theme_space_theme.scss'
import 'shared/styles/theme/_shadow/Theme_shadow_theme.scss'

import { App } from 'app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Theme } from '@consta/uikit/Theme'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider, QueryClientProvider } from 'shared/providers'
import { themePreset } from 'shared/styles/theme'

import i18n from 'shared/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Theme preset={themePreset}>
            <AuthProvider>
              <App />
              <ReactQueryDevtools initialIsOpen={false} position="right" />
            </AuthProvider>
          </Theme>
        </I18nextProvider>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
)
