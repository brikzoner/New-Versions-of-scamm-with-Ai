'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Target, AlertCircle, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: Target,
      title: String(t('about.mission.title')),
      content: String(t('about.mission.content')),
    },
    {
      icon: AlertCircle,
      title: String(t('about.why.title')),
      content: String(t('about.why.content')),
    },
    {
      icon: Lightbulb,
      title: String(t('about.approach.title')),
      content: String(t('about.approach.content')),
    },
  ]

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
            <h1 className="heading-1 mb-4">{String(t('about.title'))}</h1>
            <p className="text-xl text-gray-600">
              {String(t('about.subtitle'))}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-scandi-blue/10 text-scandi-blue">
                    <section.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="heading-3 mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


