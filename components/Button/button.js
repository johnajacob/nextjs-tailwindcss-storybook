import PropTypes from 'prop-types'

const Button = ({ label, link }) => (
  <a
    className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white no-underline bg-pink-600 rounded-md hover:bg-pink-800"
    href={link}
  >
    {label}
  </a>
)

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
