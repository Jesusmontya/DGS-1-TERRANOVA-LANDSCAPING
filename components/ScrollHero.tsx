'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ScrollHero.module.css'

const VIDEO_DURATION = 9.84
const MOBILE_VIDEO = '/videos/terranova-hero-mobile.mp4'
const DESKTOP_VIDEO = '/videos/terranova-hero-transformation.mp4'

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
  const fallbackRef = useRef(false)
  const [progress, setProgress] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    video.muted = true
    video.load()

    const readProgress = () => {
      const rect = section.getBoundingClientRect()
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight
      const scrollable = Math.max(section.offsetHeight - viewportHeight, 1)
      return Math.min(Math.max(-rect.top / scrollable, 0), 1)
    }

    const seekToProgress = () => {
      const raw = readProgress()
      setProgress(raw)

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA && Number.isFinite(video.duration) && video.duration > 0) {
        const usableDuration = Math.min(VIDEO_DURATION, Math.max(video.duration - 0.03, 0))
        const targetTime = Math.min(raw * VIDEO_DURATION, usableDuration)

        if (Math.abs(video.currentTime - targetTime) > 0.025) {
          try {
            video.currentTime = targetTime
          } catch {
            // Safari can briefly reject a seek while opening a new byte range.
          }
        }
      }
    }

    const primeVideo = async () => {
      try {
        video.muted = true
        if (video.networkState === HTMLMediaElement.NETWORK_EMPTY) video.load()
        await video.play()
        video.pause()
        seekToProgress()
      } catch {
        // A touch/pointer gesture below will retry on browsers that require one.
      }
    }

    const onScroll = () => {
      if (video.networkState === HTMLMediaElement.NETWORK_EMPTY) video.load()
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(() => {
          frameRef.current = null
          seekToProgress()
        })
      }
    }

    const onFirstGesture = () => {
      void primeVideo()
    }

    seekToProgress()
    void primeVideo()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('touchstart', onFirstGesture, { passive: true })
    window.addEventListener('pointerdown', onFirstGesture, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('touchstart', onFirstGesture)
      window.removeEventListener('pointerdown', onFirstGesture)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const handleReady = (video: HTMLVideoElement) => {
    video.muted = true
    setVideoReady(true)
    setVideoError(false)

    const section = sectionRef.current
    if (!section || !Number.isFinite(video.duration) || video.duration <= 0) return

    const rect = section.getBoundingClientRect()
    const viewportHeight = document.documentElement.clientHeight || window.innerHeight
    const scrollable = Math.max(section.offsetHeight - viewportHeight, 1)
    const raw = Math.min(Math.max(-rect.top / scrollable, 0), 1)
    const usableDuration = Math.min(VIDEO_DURATION, Math.max(video.duration - 0.03, 0))

    try {
      video.currentTime = Math.min(raw * VIDEO_DURATION, usableDuration)
    } catch {}
  }

  const handleVideoError = (video: HTMLVideoElement) => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches

    if (isMobile && !fallbackRef.current) {
      fallbackRef.current = true
      setVideoReady(false)
      setVideoError(false)
      video.src = DESKTOP_VIDEO
      video.load()
      return
    }

    setVideoReady(false)
    setVideoError(true)
  }

  const time = progress * VIDEO_DURATION
  const activeStage = [...stages].reverse().find((stage) => time >= stage.time) ?? null
  const introOpacity = Math.max(0, 1 - progress * 5)
  const stageOpacity = Math.min(1, Math.max(0, (progress - 0.12) * 5))

  return (
    <section className={styles.story} id="top" ref={sectionRef}>
      <div className={styles.sticky}>
        <video
          ref={videoRef}
          className={styles.video}
          muted
          playsInline
          preload="auto"
          controls={false}
          poster="/images/imgs/IMG_0274.PNG"
          onLoadedMetadata={(event) => handleReady(event.currentTarget)}
          onLoadedData={(event) => handleReady(event.currentTarget)}
          onCanPlay={(event) => handleReady(event.currentTarget)}
          onError={(event) => handleVideoError(event.currentTarget)}
          aria-label="TerraNova backyard landscaping transformation"
        >
          <source media="(max-width: 760px)" src={MOBILE_VIDEO} type="video/mp4" />
          <source src={DESKTOP_VIDEO} type="video/mp4" />
        </video>

        {videoError && (
          <div className={styles.videoStatus}>Transformation video unavailable.</div>
        )}

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
      </div>
    </section>
  )
}
