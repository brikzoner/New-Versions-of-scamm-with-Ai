'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import ScamTypeCard from '@/components/ScamTypeCard'
import { Video, AlertTriangle, MessageSquare, Mail, Users } from 'lucide-react'

const scamTypes = [
  {
    id: 'deepfake',
    icon: Video,
    color: 'text-red-500',
  },
  {
    id: 'voiceSpoofing',
    icon: AlertTriangle,
    color: 'text-orange-500',
  },
  {
    id: 'aiChats',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    id: 'phishing',
    icon: Mail,
    color: 'text-purple-500',
  },
  {
    id: 'socialEngineering',
    icon: Users,
    color: 'text-green-500',
  },
]

export default function ScamTypesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-white to-scandi-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 mb-4">{t('scamTypes.title')}</h1>
            <p className="text-xl text-gray-600">
              {t('scamTypes.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scam Types Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {scamTypes.map((scamType, index) => (
              <motion.div
                key={scamType.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ScamTypeCard
                  id={scamType.id}
                  icon={scamType.icon}
                  iconColor={scamType.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

