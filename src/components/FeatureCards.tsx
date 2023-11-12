import '@/styles/FeatureCards.css'
import brandIcon from '@assets/images/icon-brand-recognition.svg'
import recordsIcon from '@assets/images/icon-detailed-records.svg'
import customizeIcon from '@assets/images/icon-fully-customizable.svg'
import { Fragment } from 'react'

export default function FeatureCards() {
  return (
    <div className="feature-cards-wrapper">
      {featuresData.map((item, index) => (
        <Fragment key={item.title}>
          <FeatureCard index={index} {...item} />
          {index < featuresData.length - 1 && <div className="card-line"></div>}
        </Fragment>
      ))}
    </div>
  )
}

interface FeatureCardProps {
  title: string
  info: string
  icon: { src: string; alt: string }
  index: number
}
function FeatureCard({ title, info, icon, index }: FeatureCardProps) {
  return (
    <div data-card-index={index} className="feature-card">
      <div className="feature-img-wrapper">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
      <p className="feature-info">{info}</p>
    </div>
  )
}

const featuresData = [
  {
    title: 'Brand Recogniction',
    info: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    icon: { src: brandIcon, alt: 'An illustration of a uptrend chart' },
  },
  {
    title: 'Detailed Records',
    info: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision',
    icon: { src: recordsIcon, alt: 'An icon for detailed records' },
  },
  {
    title: 'Fully Customizable',
    info: 'Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.',
    icon: { src: customizeIcon, alt: 'An Icon for fully customizable' },
  },
]
