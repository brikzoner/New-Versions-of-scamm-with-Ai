'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, AlertTriangle, Eye, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const features = [
    {
      icon: Shield,
      title: t('home.features.education.title'),
      description: t('home.features.education.description'),
    },
    {
      icon: AlertTriangle,
      title: t('home.features.detection.title'),
      description: t('home.features.detection.description'),
    },
    {
      icon: Eye,
      title: t('home.features.awareness.title'),
      description: t('home.features.awareness.description'),
    },
    {
      icon: Zap,
      title: t('home.features.protection.title'),
      description: t('home.features.protection.description'),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-scandi-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6 text-scandi-dark">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/detection" className="btn-primary inline-block text-center">
                {t('home.hero.cta.detect')}
              </Link>
              <Link href="/scam-types" className="btn-secondary inline-block text-center">
                {t('home.hero.cta.learn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">{t('home.features.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-scandi-blue" />
                <h3 className="heading-3 mb-3 text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-scandi-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: t('home.stats.scamTypes') },
              { value: '100%', label: t('home.stats.free') },
              { value: '24/7', label: t('home.stats.available') },
              { value: '∞', label: t('home.stats.languages') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-scandi-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-4">{t('home.cta.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('home.cta.description')}
            </p>
            <Link href="/detection" className="btn-primary inline-block">
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

