'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-scandi-dark text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.about.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/scam-types" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.scamTypes')}
                </Link>
              </li>
              <li>
                <Link href="/detection" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.detection')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.links.resources')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.info.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.info.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.info.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.legal.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.legal.disclaimer')}
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

