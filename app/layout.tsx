"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"
          onLoad={() => {
            window.botpressWebChat.init({
              composerPlaceholder: "Chat with bot",
              botConversationDescription: "This chatbot was built surprisingly fast with Botpress",
              botId: "5b678eb9-9fa7-4b77-922f-6459ed91b550",
              hostUrl: "https://cdn.botpress.cloud/webchat/v1",
              messagingUrl: "https://messaging.botpress.cloud",
              clientId: "5b678eb9-9fa7-4b77-922f-6459ed91b550",
              webhookId: "578b32e1-755d-4184-9fda-e50aa7ed299b",
              lazySocket: true,
              themeName: "prism",
              frontendVersion: "v1",
              showPoweredBy: true,
              theme: "prism",
              themeColor: "#2563eb"
            })
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
