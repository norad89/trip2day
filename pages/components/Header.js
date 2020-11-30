import { Button, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'

function Header() {
    return (
        <div className='contenitore'>

            <br />
            <img className='images' src="https://i.pinimg.com/originals/ac/b9/6b/acb96bd45aa8123f05757b16666cd45d.jpg" width="200px" />

            <br />

            <div className='Description'>
                <h1 className='ProfileName'> Cristina Munuz </h1>
                <p className='MyStory'> Ciao sono Cristina, mi piace molto viaggiare da quando ad Amsterdam
                ho incontrato la mia anima gemella. non lo dimenticherò mai. Ho amato Gianpaolo dal primo momento.
                Era entrato nel locale per un "massaggio" con sorpresa ed io era la sua massaggiatrice.
                </p>
            </div>

            <br />

            <div className='ButtonPosition'>
                <Link href='./SearchLocation'><button className='ButtonToTrip'><a className='ButtonText'> Plan your next trip </a></button></Link>
            </div>

            <br />
            <div className='text-center'>
                <ButtonGroup aria-label="Basic example">

                    <Link href="./PastTrips"><Button
                        style={{ color: 'white', backgroundColor: '#455753' }}
                        variant="secondary">
                        My Past Trips</Button></Link>

                    <Link href="./PlannedTrips"><Button
                        variant="secondary"
                        style={{ color: 'white', backgroundColor: '#455753' }}>
                        My Planned Trips
                    </Button></Link>

                    <Link href="./Photos"><Button
                        style={{ color: 'white', backgroundColor: '#455753' }}
                        variant="secondary">
                        My Photos
                    </Button></Link>

                </ButtonGroup>
            </div>
        </div>


    )
}

export default Header