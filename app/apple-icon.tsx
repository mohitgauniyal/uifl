import { ImageResponse } from 'next/og'

// Apple touch icon (home-screen). Full-bleed oxblood tile with the "U" monogram;
// iOS applies its own rounded-corner mask.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#7A2E2E',
          color: '#F6F1E7',
          fontSize: 120,
          fontWeight: 700,
          fontFamily: 'serif',
        }}
      >
        U
      </div>
    ),
    { ...size },
  )
}
