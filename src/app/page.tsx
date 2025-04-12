'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">أسطورة إلهام</h1>
        <p className="text-xl mb-8">لعبة قتال فردي تجمع بين القتال السريع واختيار الأسلحة والألوان الشخصية</p>
        <button className="btn-primary">ابدأ المغامرة</button>
      </motion.section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Character System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-4">نظام الشخصيات</h2>
          <ul className="space-y-2">
            <li>👸 إلهام: الشخصية الأسطورية</li>
            <li>👨‍🎤 تخصيص شخصيتك</li>
          </ul>
        </motion.div>

        {/* Weapons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-4">الأسلحة</h2>
          <ul className="space-y-2">
            <li>⚔️ سيف</li>
            <li>🗡️ رمح</li>
            <li>🏹 قوس</li>
            <li>✨ سحر</li>
          </ul>
        </motion.div>

        {/* Game Modes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-4">أنماط اللعب</h2>
          <ul className="space-y-2">
            <li>🎯 طور التحدي</li>
            <li>📚 طور التدريب</li>
            <li>📖 طور القصة</li>
          </ul>
        </motion.div>
      </div>

      {/* Story Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card mb-16"
      >
        <h2 className="text-3xl font-bold mb-6">القصة</h2>
        <p className="text-lg leading-relaxed">
          في عالم قديم حيث يتقاتل الأبطال من أجل السيطرة على قوى خارقة، تظهر "إلهام" — محاربة خالدة لا تعرف الخسارة. 
          يتوافد المحاربون من كل مكان لتحديها، ولكنهم جميعًا يسقطون أمام حكمتها وقوتها.
        </p>
      </motion.section>
    </div>
  )
} 