'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, LucideIcon } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface ScamTypeCardProps {
  id: string
  icon: LucideIcon
  iconColor: string
}

export default function ScamTypeCard({ id, icon: Icon, iconColor }: ScamTypeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  const data = {
    title: String(t(`scamTypes.${id}.title`)),
    subtitle: String(t(`scamTypes.${id}.subtitle`)),
    what: {
      title: String(t(`scamTypes.${id}.what.title`)),
      content: String(t(`scamTypes.${id}.what.content`)),
    },
    danger: {
      title: String(t(`scamTypes.${id}.danger.title`)),
      content: String(t(`scamTypes.${id}.danger.content`)),
    },
    description: String(t(`scamTypes.${id}.description`)),
    examples: {
      title: String(t(`scamTypes.${id}.examples.title`)),
      content: (() => {
        const content = t(`scamTypes.${id}.examples.content`)
        return Array.isArray(content) ? content : []
      })(),
    },
    recognize: {
      title: String(t(`scamTypes.${id}.recognize.title`)),
      content: (() => {
        const content = t(`scamTypes.${id}.recognize.content`)
        return Array.isArray(content) ? content : []
      })(),
    },
    action: {
      title: String(t(`scamTypes.${id}.action.title`)),
      content: (() => {
        const content = t(`scamTypes.${id}.action.content`)
        return Array.isArray(content) ? content : []
      })(),
    },
  }

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-gray-50 ${iconColor}`}>
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="heading-3 mb-2">{data.title}</h2>
            <p className="text-gray-600">{data.subtitle}</p>
            {data.description && (
              <p className="text-gray-700 mt-2">{data.description}</p>
            )}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-scandi-gray rounded-lg transition-colors"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          aria-expanded={isExpanded}
        >
          <ChevronDown
            className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Video Placeholder */}
      <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
        <div className="text-center">
          <Play className="w-16 h-16 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Video Example Placeholder</p>
          <p className="text-sm text-gray-400 mt-1">
            YouTube embed or MP4 video would appear here
          </p>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-8 pt-6 border-t border-scandi-gray">
              {/* What is it */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{data.what.title}</h3>
                <p className="text-gray-700 leading-relaxed">{data.what.content}</p>
              </div>

              {/* Why Dangerous */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{data.danger.title}</h3>
                <p className="text-gray-700 leading-relaxed">{data.danger.content}</p>
              </div>

              {/* Examples */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{data.examples.title}</h3>
                <ul className="space-y-2">
                  {data.examples.content.map((example: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-scandi-blue mt-1">•</span>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Recognize */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{data.recognize.title}</h3>
                <ul className="space-y-2">
                  {data.recognize.content.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-scandi-blue mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Do */}
              <div>
                <h3 className="text-xl font-semibold mb-3">{data.action.title}</h3>
                <ul className="space-y-2">
                  {data.action.content.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-scandi-blue mt-1">→</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

