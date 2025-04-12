'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Character {
  id: string
  name: string
  image: string
  description: string
  weapon: string
}

interface GameMode {
  id: string
  name: string
  description: string
  icon: string
}

const characters: Character[] = [
  {
    id: 'ilham',
    name: 'إلهام',
    image: '👸',
    description: 'محاربة أسطورية لا تُهزم',
    weapon: 'سيف'
  },
  {
    id: 'player',
    name: 'المحارب',
    image: '👨‍🎤',
    description: 'محارب شجاع يبحث عن التحدي',
    weapon: 'رمح'
  }
]

const gameModes: GameMode[] = [
  {
    id: 'challenge',
    name: 'طور التحدي',
    description: 'مواجهة مباشرة ضد إلهام',
    icon: '🎯'
  },
  {
    id: 'training',
    name: 'طور التدريب',
    description: 'تعلم الحركات والهجمات الخاصة',
    icon: '📚'
  },
  {
    id: 'story',
    name: 'طور القصة',
    description: 'مراحل قصيرة تنتهي بمواجهة إلهام',
    icon: '📖'
  }
]

export default function GamePage() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [gameStarted, setGameStarted] = useState(false)

  const handleModeSelect = (modeId: string) => {
    setSelectedMode(modeId)
  }

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character)
  }

  const startGame = () => {
    if (selectedMode && selectedCharacter) {
      setGameStarted(true)
    }
  }

  if (gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">جاري تطوير اللعبة</h1>
          <p className="text-xl mb-8">سيتم إضافة محتوى اللعب قريباً!</p>
          <button
            onClick={() => setGameStarted(false)}
            className="btn-primary"
          >
            العودة للقائمة الرئيسية
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Game Mode Selection */}
      {!selectedMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">اختر نمط اللعب</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameModes.map((mode) => (
              <motion.div
                key={mode.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mode-card ${selectedMode === mode.id ? 'selected' : ''}`}
                onClick={() => handleModeSelect(mode.id)}
              >
                <div className="text-6xl mb-4">{mode.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{mode.name}</h3>
                <p className="text-lg text-white/80">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Character Selection */}
      {selectedMode && !selectedCharacter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">اختر شخصيتك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characters.map((character) => (
              <motion.div
                key={character.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mode-card ${selectedCharacter?.id === character.id ? 'selected' : ''}`}
                onClick={() => handleCharacterSelect(character)}
              >
                <div className="text-8xl mb-4">{character.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{character.name}</h3>
                <p className="text-lg text-white/80 mb-4">{character.description}</p>
                <p className="text-lg text-white/60">السلاح: {character.weapon}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Start Game Button */}
      {selectedMode && selectedCharacter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={startGame}
            className="btn-primary text-2xl"
          >
            ابدأ اللعب
          </button>
        </motion.div>
      )}
    </div>
  )
} 