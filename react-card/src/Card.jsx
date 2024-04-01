import profilePic from './assets/lucy-200.jpg'

function Card() {
    return (

        <div className="card">
            <img className='card-image' alt='Lucy Cyberpunk' src={profilePic}></img>
            <h2 className='card-title'>Lucy</h2>
            <p className='card-text'>Lucy é uma ciborgue habilidosa e enigmática que vive em um mundo futurista
                corrupto. Com um passado sombrio, ela é solitária e reservada, mas possui um forte senso de justiça. Ao
                longo da série, enfrenta desafios pessoais e confrontos perigosos enquanto busca sua identidade e
                propósito. Sua jornada é marcada por ação, intriga e momentos emocionantes, tornando-a uma personagem
                central e memorável no anime Cyberpunk.
            </p>
        </div>
    )
}

export default Card