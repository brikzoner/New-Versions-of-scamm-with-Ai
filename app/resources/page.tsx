'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Book, Tool, Bell } from 'lucide-react'

export default function ResourcesPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: Book,
      title: t('resources.sections.guides.title'),
      items: [
        {
          title: t('resources.sections.guides.items.0.title'),
          description: t('resources.sections.guides.items.0.description'),
        },
        {
          title: t('resources.sections.guides.items.1.title'),
          description: t('resources.sections.guides.items.1.description'),
        },
        {
          title: t('resources.sections.guides.items.2.title'),
          description: t('resources.sections.guides.items.2.description'),
        },
      ],
    },
    {
      icon: Tool,
      title: t('resources.sections.tools.title'),
      items: [
        {
          title: t('resources.sections.tools.items.0.title'),
          description: t('resources.sections.tools.items.0.description'),
        },
        {
          title: t('resources.sections.tools.items.1.title'),
          description: t('resources.sections.tools.items.1.description'),
        },
        {
          title: t('resources.sections.tools.items.2.title'),
          description: t('resources.sections.tools.items.2.description'),
        },
      ],
    },
    {
      icon: Bell,
      title: t('resources.sections.updates.title'),
      items: [
        {
          title: t('resources.sections.updates.items.0.title'),
          description: t('resources.sections.updates.items.0.description'),
        },
        {
          title: t('resources.sections.updates.items.1.title'),
          description: t('resources.sections.updates.items.1.description'),
        },
      ],
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
            <h1 className="heading-1 mb-4">{t('resources.title')}</h1>
            <p className="text-xl text-gray-600">
              {t('resources.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIdx * 0.1 }}
                className="card"
              >
                <section.icon className="w-10 h-10 text-scandi-blue mb-4" />
                <h2 className="heading-3 mb-6">{section.title}</h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

