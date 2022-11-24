import sedan from "./images/icon-sedans.svg"
import luxury from "./images/icon-luxury.svg"
import suvs from "./images/icon-suvs.svg"
import "./App.css"

const veiculos = [
  { id: 'sedan',
    details: [
      {
        nome: 'SEDANS',
        img: sedan,
        texto: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on you next road trip.',
        button: 'Learn More',
        buttonText: "hsl(31, 77%, 52%)"
      }
    ]
  },
  { id: 'suvs',
    details: [
      {
        nome: 'SUVS',
        img: suvs,
        texto: 'Take an SUV for its spacious interios, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        button: 'Learn More',
        buttonText: "hsl(184, 100%, 22%)"
      }
    ]
  },
  { id: 'luxury',
    details: [
      {
        nome: 'LUXURY',
        img: luxury,
        texto: 'Cruise in the best car brands whitout the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        button: 'Learn More',
        buttonText: "hsl(179, 100%, 13%)"

      }
    ]
  }
]

function Main() {
  return(
    <main>
      {veiculos.map(cars => (
        <Cars key={cars.id} id={cars.id} details={cars.details}/>
      ))}
    </main>
  )
}

function Cars({id, details}) {
  
  return(
    <section>
      {details.map(det => (
        <div className={id + " setores"}>

          <div className="img">
            <img src={det.img}/>
          </div>

          <div className="titulo">
            <h1>{det.nome}</h1>
          </div> 

          <div className="texto">
            <p>{det.texto}</p>
          </div>

          <div>
            <button>Learn More</button>
          </div>
          
        </div>
     ))}
    </section>
  )
}

export default Main