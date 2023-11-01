import shortenImg from '@assets/images/bg-shorten-mobile.svg'
import '@/styles/LinkInput.css'

function LinkInput() {
  return (
    <div className="link-input-wrapper">
      <img className="bg-link-input" src={shortenImg} />
      <input
        type="url"
        name="link-input"
        id="link-input"
        placeholder="Shorten a link here..."
      />
      <button className="button btn-primary btn-square">Shorten It!</button>
    </div>
  )
}

export default LinkInput
