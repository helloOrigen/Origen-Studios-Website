import React from 'react'
import Title from '../components/title'

export default function NewsletterForm (props) {
  return (
    <>
      <div className="w-100 h-a h-pr-fl-ma b-s-b-b">
        <Title className="m-t-10px ns-c-e t-a-c" h3="¡Suscribase Gratis!" />
        <Title
          className="t-a-c m-t-10px"
          h4="¡Obtenga recursos gratis, beneficios, promociones, conozca nuestros eventos, calendarios y muchas cosas más!"
        />
        <iframe
          className="h-a h-pr-fl-ma"
          src="https://a5455d64.sibforms.com/serve/MUIFAF4kToT94r3Yzc_vIzBHcjdkdI-bej5X5TXNHuRQPz3N8XUwwkMNaJxwcO_tEC9YLES-UqjUiJo4U-wG7VzcnGYzPrJcoLEVy4xXj0a2tZKhOhJPppzZsIui4r-Bz6WhPU406-HzHpbdwm5YaeTtFN8KQ66VpNl-M7EG81F_tXTeijbkm74KZN5u-XOy1lh70QBZthkOJF-Q"
          frameBorder="0"
          allowfullscreen
          style={{
            height: '680px',
            width: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%'
          }}
        />
      </div>
    </>
  )
}
