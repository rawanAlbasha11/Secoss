import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className=" text-accentBg  text-4xl hover:text-accent"
    > {/* mb-4 px-4 py-2 */}
      <FaArrowRight />
    </button>
  )
}

export default BackButton