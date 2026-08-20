'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ScrollHero.module.css'

const VIDEO_DURATION = 9.84

const stages = [
  { time: 1.0, label: 'BEFORE', detail: 'We start with the space exactly as it is.' },
  { time: 2.38, label: 'IRRIGATION', detail: 'Underground irrigation is installed before the finish work begins.' },
  { time: 4.02, label: 'HARDSCAPE', detail: 'The concrete path begins to define the layout.' },
  { time: 6.96, label: 'STONE', detail: 'Decorative stone brings structure and contrast to the yard.' },
  { time: 8.55, label: 'PLANTING', detail: 'Plants and greenery finish the landscape design.' },
  { time: 9.84, label: 'FINAL RESULT', detail: 'A complete outdoor transformation, built step by step.' },
]

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [mobileUnlocked, setMobileUnlocked] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const primeVideo = async () => {
      if (mobileUnlocked) return

      try {
        video.muted = true
        await video.play()
        video.pause()
        if (video.currentTime < 0.01) video.currentTime = 0.01
        setMobileUnlocked(true)
      } catch {
        // iOS Safari can require a direct touch before allowing programmatic seeking.
      }
    }

    const update = () => {
      frameRef.current = null

      const rect = section.getBoundingClientRect()
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight
      const scrollable = Math.max(section.offsetHeight - viewportHeight, 1)
      const raw = Math.min(Math.max(-rect.top / scrollable, 0), 1)
      setProgress(raw)

      if (
        videoReady &&
        video.readyState >= 2 &&
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        const usableDuration = Math.min(VIDEO_DURATION, Math.max(video.duration - 0.03, 0))
        const targetTime = Math.min(raw * VIDEO_DURATION, usableDuration)

        if (Math.abs(video.currentTime - targetTime) > 0.035) {
          try {
            video.currentTime = targetTime
          } catch {
            // Ignore short-lived seek errors while Safari finishes buffering.
          }
        }
      }
    }

    const onScroll = () => {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(update)
    }

    const onFirstGesture = () => {
      primeVideo()
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('touchstart', onFirstGesture, { passive: true, once: true })
    window.addEventListener('pointerdown', onFirstGesture, { passive: true, once: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('touchstart', onFirstGesture)
      window.removeEventListener('pointerdown', onFirstGesture)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [videoReady, mobileUnlocked])

  const time = progress * VIDEO_DURATION
  const activeStage = [...stages].reverse().find((stage) => time >= stage.time) ?? null
  const introOpacity = Math.max(0, 1 - progress * 5)
  const stageOpacity = Math.min(1, Math.max(0, (progress - 0.12) * 5))

  return (
    <section className={styles.story} id="top" ref={sectionRef}>
      <div className={styles.sticky}>
        <div className={styles.mediaFrame}>
          <video
            ref={videoRef}
            className={styles.video}
            muted
            playsInline
            preload="auto"
            controls={false}
            onLoadedMetadata={(event) => {
              const video = event.currentTarget
              video.muted = true
              video.currentTime = 0.01
              setVideoReady(true)
              setVideoError(false)
            }}
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            onError={() => {
              setVideoReady(false)
              setVideoError(true)
            }}
            aria-label="TerraNova backyard landscaping transformation"
          >
            <source
              media="(max-width: 767px)"
              src="/videos/gemini_generated_video_18C35B46%202.MP4"
              type="video/mp4"
            />
            <source src="/videos/terranova-hero-transformation.mp4" type="video/mp4" />
          </video>

          {!videoReady && !videoError && (
            <div className={styles.videoStatus}>Loading transformation…</div>
          )}

          {videoError && (
            <div className={styles.videoStatus}>Transformation video unavailable.</div>
          )}
        </div>

        <div className={styles.shade} />

        <div className={`${styles.intro} page-width`} style={{ opacity: introOpacity }}>
          <p className="eyebrow light">LANDSCAPING • RENO • SPARKS • NORTHERN NEVADA</p>
          <h1>See what your yard can become.</h1>
          <p>
            Scroll through a TerraNova transformation — from finished result, back to the original yard, then through every major stage of the build.
          </p>
          <span className={styles.cue}>SCROLL TO BUILD THE YARD ↓</span>
        </div>

        <div className={`${styles.stage} page-width`} style={{ opacity: stageOpacity }}>
          <div className={styles.stageCopy}>
            <span className={styles.stageIndex}>
              {activeStage ? String(stages.indexOf(activeStage) + 1).padStart(2, '0') : '00'}
            </span>
            <p>{activeStage?.label ?? 'AFTER'}</p>
            <h2>{activeStage?.detail ?? 'Start with the finished result. Then scroll backward to see how TerraNova built it.'}</h2>
          </div>

          <div className={styles.progress} aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>

        <a className={styles.cta} href="#contact">Get a Free Estimate <span>↗</span></a>
      </div>
    </section>
  )
}
