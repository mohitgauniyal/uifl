import { ImageResponse } from 'next/og'
import { languageMeta, languageIds, siteConfig } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Language classes in Dehradun'

export function generateStaticParams() {
  return languageIds.map((language) => ({ language }))
}

export default async function Image({ params }: { params: Promise<{ language: string }> }) {
  const { language } = await params
  const m = languageMeta[language] ?? {
    name: 'Foreign Language',
    exam: 'International exams',
    blurb: '',
  }

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
          EST. 1999 · DEHRADUN
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 700, color: '#22201C', lineHeight: 1.05 }}>
            {m.name} classes
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, color: '#7A2E2E', lineHeight: 1.05 }}>
            in Dehradun &amp; online
          </div>
          <div style={{ fontSize: 30, color: '#4a4640', marginTop: 28 }}>
            {m.exam} preparation · beginner to advanced
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 26, color: '#22201C', fontWeight: 600 }}>
            Unique Institute of Foreign Languages
          </div>
          <div style={{ fontSize: 24, color: '#6b6660' }}>uniqueinstituteddn.in</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
