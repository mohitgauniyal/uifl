import { ImageResponse } from 'next/og'

export const alt = 'Unique Institute of Foreign Languages — Dehradun'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F6F1E7',
          borderBottom: '16px solid #7A2E2E',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: '#A67C34', fontWeight: 600 }}>
          EST. 1998 · DEHRADUN
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 78, fontWeight: 700, color: '#22201C', lineHeight: 1.05 }}>
            Unique Institute of
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, color: '#7A2E2E', lineHeight: 1.05 }}>
            Foreign Languages
          </div>
          <div style={{ fontSize: 30, color: '#4a4640', marginTop: 28 }}>
            French · German · Spanish · Japanese · Russian · English · Chinese
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 28, color: '#22201C', fontWeight: 600 }}>uniqueinstituteddn.in</div>
          <div style={{ fontSize: 24, color: '#6b6660' }}>
            DELF · Goethe · DELE · JLPT · HSK · IELTS
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
