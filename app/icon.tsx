import { ImageResponse } from 'next/og'

// Branded favicon — a "U" monogram in the institute's oxblood/parchment palette.
// A full logo is illegible at 16–32px, so the tab mark is a single clean letter.
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          fontSize: 24,
          fontWeight: 700,
          fontFamily: 'serif',
          borderRadius: 6,
        }}
      >
        U
      </div>
    ),
    { ...size },
  )
}
