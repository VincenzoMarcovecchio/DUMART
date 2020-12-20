import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/it'
import { SelectOutlined } from '@ant-design/icons'
// import readingTime from 'reading-time'

const Content = ({ body, title, date, externalLink }) => (
  <div className="">
    {externalLink ? (
      <h1 className="text-5xl mt-3 mb-0">
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
        >
          <SelectOutlined className="text-3xl" /> {title}
        </a>
      </h1>
    ) : (
      <>
        <h1 className="text-5xl mt-3 mb-0">{title}</h1>
        <p className="text-gray-500">
          Scritta il{' '}
          <time dateTime={dayjs(date).format('MMMM D, YYYY')}>
            {dayjs(date).format('MMMM DD, YYYY')}
          </time>{' '}
          {/* | {readingTime(body).text} */}
        </p>
        <div className="max-w-sm px-4" dangerouslySetInnerHTML={{ __html: body }} />
        <br />
        <br />
      </>
    )}
  </div>
)

export default Content
