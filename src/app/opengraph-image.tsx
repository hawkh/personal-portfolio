import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Sai Ruthvik Bommakanti - Machine Learning Engineer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111827',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #374151 2px, transparent 0), radial-gradient(circle at 75px 75px, #374151 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            backgroundColor: 'rgba(17, 24, 39, 0.8)',
            borderRadius: '20px',
            border: '2px solid #3B82F6',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
            }}
          >
            Sai Ruthvik Bommakanti
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#9CA3AF',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Machine Learning Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#6B7280',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Specializing in AI, Computer Vision, and Deep Learning
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}