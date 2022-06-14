/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { KTSVG } from "../../../helpers";

type Props = {
  className: string
  innerPadding?: string
}

const EngageWidget5: React.FC<Props> = ({className, innerPadding = '', children}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-column'>
        {/* begin::Text */}
        <h3 className='text-white text-left fs-1 fw-bolder lh-lg'>
          About
          <br />
        </h3>
        {/* end::Text */}
        {children}
        {/* begin::Image */}

        {/* end::Image */}
      </div>
      {/* end::Wrapper */}

      {/* end::Body */}
    </div>
  )
}

export {EngageWidget5}
