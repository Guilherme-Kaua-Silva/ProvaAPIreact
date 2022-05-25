import { Link } from 'react-router-dom'
 

export default function Index(){
    return(
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to='/corprimaria'> CorPrimaria </Link> </li>
                <li> <Link to='/frequencia'> Frequencia </Link> </li>
                <li> <Link to='/ingresso'> Ingresso </Link> </li>
                <li> <Link to='/maiornumero'> MaiorNumero </Link> </li>
                
            </ul>







        </main>


    )
}