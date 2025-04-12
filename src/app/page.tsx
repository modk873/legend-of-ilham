'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Home(): JSX.Element {
  const router = useRouter()

  const handleStartGame = () => {
    router.push('/game')
  }

  return (
    <div className="container mx-auto px-4 py-8" role="main">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">أسطورة إلهام</h1>
        <p className="text-2xl mb-8 text-white/90">لعبة قتال فردي تجمع بين القتال السريع واختيار الأسلحة والألوان الشخصية</p>
        <motion.button 
          onClick={handleStartGame}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Start Game"
        >
          ابدأ المغامرة
        </motion.button>
      </motion.section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="region" aria-label="Game Features">
        {/* Character System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card"
          role="article"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">نظام الشخصيات</h2>
          <ul className="space-y-2 text-white/90" role="list">
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">👸</span>
              <span>إلهام: الشخصية الأسطورية</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">👨‍🎤</span>
              <span>تخصيص شخصيتك</span>
            </li>
          </ul>
        </motion.div>

        {/* Weapons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
          role="article"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">الأسلحة</h2>
          <ul className="space-y-2 text-white/90" role="list">
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">⚔️</span>
              <span>سيف</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">🗡️</span>
              <span>رمح</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">🏹</span>
              <span>قوس</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">✨</span>
              <span>سحر</span>
            </li>
          </ul>
        </motion.div>

        {/* Game Modes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
          role="article"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">أنماط اللعب</h2>
          <ul className="space-y-2 text-white/90" role="list">
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">🎯</span>
              <span>طور التحدي</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">📚</span>
              <span>طور التدريب</span>
            </li>
            <li className="flex items-center gap-2" role="listitem">
              <span className="text-2xl" aria-hidden="true">📖</span>
              <span>طور القصة</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Story Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card mb-16"
        role="article"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">القصة</h2>
        <p className="text-lg leading-relaxed text-white/90">
          في عالم قديم حيث يتقاتل الأبطال من أجل السيطرة على قوى خارقة، تظهر "إلهام" — محاربة خالدة لا تعرف الخسارة. 
          يتوافد المحاربون من كل مكان لتحديها، ولكنهم جميعًا يسقطون أمام حكمتها وقوتها.
        </p>
      </motion.section>
    </div>
  )
} 