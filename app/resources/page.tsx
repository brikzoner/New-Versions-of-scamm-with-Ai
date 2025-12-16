'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Book, Tool, Bell } from 'lucide-react'

type ResourceItem = { title: string; description: string }
type ResourceSection = { icon: any; title: string; items: ResourceItem[] }

export default function ResourcesPage() {
  const { t } = useLanguage()

  const sections = (() => {
    const data = t('resources.sections') as Record<string, any>
    const guides = data?.guides || {}
    const tools = data?.tools || {}
    const updates = data?.updates || {}

    const buildItems = (items: any): ResourceItem[] =>
      Array.isArray(items)
        ? items.map((item) => ({
            title: String(item?.title ?? ''),
            description: String(item?.description ?? ''),
          }))
        : []

    const mapped: ResourceSection[] = [
      {
        icon: Book,
        title: String(guides.title ?? ''),
        items: buildItems(guides.items),
      },
      {
        icon: Tool,
        title: String(tools.title ?? ''),
        items: buildItems(tools.items),
      },
      {
        icon: Bell,
        title: String(updates.title ?? ''),
        items: buildItems(updates.items),
      },
    ]

    return mapped
  })()

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


