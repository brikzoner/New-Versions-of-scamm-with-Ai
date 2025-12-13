'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { AlertTriangle, CheckCircle, Shield, Loader2 } from 'lucide-react'

interface AnalysisResult {
  verdict: 'scam' | 'suspicious' | 'safe'
  riskPercentage: number
  explanation: string
  indicators: string[]
}

export default function DetectionPage() {
  const [input, setInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const { t } = useLanguage()

  const analyzeContent = async () => {
    if (!input.trim()) return

    setIsAnalyzing(true)
    setResult(null)

    // Simulate API call (replace with actual OpenAI API call)
    setTimeout(() => {
      const analysis = performMockAnalysis(input)
      setResult(analysis)
      setIsAnalyzing(false)
    }, 2000)
  }

  const performMockAnalysis = (text: string): AnalysisResult => {
    const lowerText = text.toLowerCase()
    let riskScore = 0
    const indicators: string[] = []

    // Check for common scam indicators
    if (lowerText.includes('urgent') || lowerText.includes('immediately')) {
      riskScore += 20
      indicators.push('Urgency language detected')
    }
    if (lowerText.includes('click here') || lowerText.includes('verify now')) {
      riskScore += 25
      indicators.push('Suspicious call-to-action')
    }
    if (lowerText.includes('prize') || lowerText.includes('winner')) {
      riskScore += 30
      indicators.push('Prize/winner claims')
    }
    if (lowerText.includes('send money') || lowerText.includes('wire transfer')) {
      riskScore += 40
      indicators.push('Money transfer request')
    }
    if (lowerText.includes('password') || lowerText.includes('account')) {
      riskScore += 15
      indicators.push('Account information request')
    }
    if (lowerText.includes('limited time') || lowerText.includes('expires soon')) {
      riskScore += 20
      indicators.push('Time pressure tactics')
    }
    if (lowerText.includes('congratulations') && lowerText.includes('won')) {
      riskScore += 35
      indicators.push('Unsolicited prize notification')
    }

    // Determine verdict
    let verdict: 'scam' | 'suspicious' | 'safe'
    if (riskScore >= 60) {
      verdict = 'scam'
    } else if (riskScore >= 30) {
      verdict = 'suspicious'
    } else {
      verdict = 'safe'
    }

    const explanation = riskScore >= 60
      ? 'This content shows multiple strong indicators of a scam. Exercise extreme caution and do not engage with any requests.'
      : riskScore >= 30
      ? 'This content shows some suspicious characteristics. Verify the source independently before taking any action.'
      : 'This content appears relatively safe, but always remain cautious and verify sources when in doubt.'

    return {
      verdict,
      riskPercentage: Math.min(riskScore, 95),
      explanation,
      indicators: indicators.length > 0 ? indicators : ['No obvious indicators detected'],
    }
  }

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'scam':
        return 'text-red-600 bg-red-50 border-red-200'
      case 'suspicious':
        return 'text-orange-600 bg-orange-50 border-orange-200'
      case 'safe':
        return 'text-green-600 bg-green-50 border-green-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'scam':
        return <AlertTriangle className="w-6 h-6" />
      case 'suspicious':
        return <Shield className="w-6 h-6" />
      case 'safe':
        return <CheckCircle className="w-6 h-6" />
      default:
        return null
    }
  }

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
            <h1 className="heading-1 mb-4">{t('detection.title')}</h1>
            <p className="text-xl text-gray-600">
              {t('detection.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detection Tool */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card">
            {/* Input Section */}
            <div className="mb-8">
              <label htmlFor="content-input" className="block text-lg font-semibold mb-3">
                {t('detection.input.label')}
              </label>
              <textarea
                id="content-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('detection.input.placeholder')}
                className="w-full h-48 p-4 border-2 border-scandi-gray rounded-lg focus:border-scandi-blue focus:outline-none resize-none"
                rows={8}
              />
              <button
                onClick={analyzeContent}
                disabled={!input.trim() || isAnalyzing}
                className="mt-4 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('detection.input.analyzing')}
                  </>
                ) : (
                  t('detection.input.button')
                )}
              </button>
            </div>

            {/* Results Section */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="border-t border-scandi-gray pt-6">
                  <h2 className="text-2xl font-bold mb-6">{t('detection.results.title')}</h2>

                  {/* Verdict */}
                  <div className={`p-6 rounded-lg border-2 mb-6 ${getVerdictColor(result.verdict)}`}>
                    <div className="flex items-center gap-3 mb-2">
                      {getVerdictIcon(result.verdict)}
                      <span className="text-lg font-semibold">
                        {t('detection.results.verdict.label')}:{' '}
                        {t(`detection.results.verdict.${result.verdict}`)}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">
                          {t('detection.results.risk.label')}:
                        </span>
                        <span className="text-2xl font-bold">
                          {String(t('detection.results.risk.percentage')).replace('{percentage}', result.riskPercentage.toString())}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            result.riskPercentage >= 60
                              ? 'bg-red-500'
                              : result.riskPercentage >= 30
                              ? 'bg-orange-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${result.riskPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {t('detection.results.explanation.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{result.explanation}</p>
                  </div>

                  {/* Indicators */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t('detection.results.indicators.title')}
                    </h3>
                    <ul className="space-y-2">
                      {result.indicators.map((indicator, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-scandi-blue mt-1">•</span>
                          <span className="text-gray-700">{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tips */}
            <div className="mt-8 pt-6 border-t border-scandi-gray">
              <h3 className="text-lg font-semibold mb-4">{t('detection.tips.title')}</h3>
              <ul className="space-y-2">
                {(() => {
                  const tips = t('detection.tips.content')
                  const tipsArray = Array.isArray(tips) ? tips : []
                  return tipsArray.map((tip: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-scandi-blue mt-1">→</span>
                      <span>{tip}</span>
                    </li>
                  ))
                })()}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

