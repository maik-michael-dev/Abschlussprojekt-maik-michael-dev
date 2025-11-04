/*
 Typedeklaration für TypScript 
 da es den zusätzlichen ReactComponent aus SVG-Datei nicht kennt*/

declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
  const src: string
  export default src
}