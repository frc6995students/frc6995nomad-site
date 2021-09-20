const Countdown = dynamic((import('react-countdown')));

const Completionist = () => (
  <span>Thanks for Supporting our Wreath Fundraiser</span>
)

// Renderer callback with condition
const renderer = ({ days, hourscompleted }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-around', color:"black" }}>
          <span>{days} days</span>
          <span>{hours} hours</span>
        </div>
        <span>
          Holiday Wreath Fundraiser
          <br />
          Click Here to Support NOMAD
        </span>
      </>
    )
  }
}
const WreathCountdown = (props) => {
  return (
    <a
      href='https://sherwoodfundraiser.com/frc6995nomad/products'
      target='_top'
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('/wreath.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:"3px lightgrey",

          color: 'white',
          fontSize: '10vmin',
          fontWeight: 'lighter'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#99cc33',
            borderRadius: '3px',
            padding: '5px',
            margin: '5vmin'
          }}
        >
          <Countdown
            date={Date.UTC(2021, 11, 8, 11, 59, 59)}
            renderer={renderer}
          ></Countdown>
        </div>
      </div>
    </a>
  )
}
export default WreathCountdown