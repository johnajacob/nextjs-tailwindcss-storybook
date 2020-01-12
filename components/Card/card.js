import React from 'react'
import PropTypes from 'prop-types'
import { ICONS } from '../Icon/icons'
import Icon from '../Icon/icon'

const Card = ({ props: { thumbImage, primaryTopic, title, abstract, author, publishedDate, commentsCount } }) => (
  <div className="relative flex flex-col sm:max-w-xs p-4">
    <div className="relative">
      <a href="/#">
        <div className="absolute left-0 bottom-0 bg-black p-1 p-2">
          <Icon icon={ICONS.video} size="32" color="#fff" />
        </div>
        <img className="w-full h-40 object-cover" alt="" src={thumbImage} loading="lazy" />
      </a>
    </div>
    <div>
      <p className="uppercase font-mono text-xs font-semibold pt-2">
        <a className="text-blue-600" href="/#">
          {primaryTopic}
        </a>
      </p>

      <h3 className="font-sans text-sm font-semibold pt-2 leading-tight">
        <a href="/#">{title}</a>
      </h3>

      <p className="text-gray-700 pt-2 text-sm">{abstract}</p>

      <p className="pt-2 text-xs font-mono uppercase tracking-widest">
        <a href="/#">{author}</a>
      </p>

      <div className="pt-2 flex justify-between items-center">
        <p className=" text-xs font-mono uppercase tracking-widest">
          <span className="text-gray-600">{publishedDate}</span>
          <span>
            |{' '}
            <a className="inline" href="/#">
              {commentsCount} Comments
            </a>
          </span>
        </p>
        <ul className="flex">
          <li className="inline pr-2">
            <button type="button">
              <Icon icon={ICONS.share} size="16" />
            </button>
          </li>
          <li className="inline">
            <button type="button">
              <Icon icon={ICONS.bookmark} size="16" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  props: PropTypes.shape({
    thumbImage: PropTypes.string,
    primaryTopic: PropTypes.string,
    title: PropTypes.string,
    abstract: PropTypes.string,
    author: PropTypes.string,
    commentsCount: PropTypes.number,
    publishedDate: PropTypes.string
  })
}

export default Card
